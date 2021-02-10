import { getExtension } from './get-file-extension';
import { getEncoding } from './get-file-encoding';
import { readFile } from "./get-file-content";

/**
 * Ayuda a establecer el estado, devolviéndolo en una sola llamada.
 * @param {File} file Archivo seleccionado por el usuario.
 */
const stateHelper = (file) => {
  let result = {
    fileName: '',
    validity: '',
    feedback: '',
    cardTitle: '',
    zmpData: '',
    tableHead: null,
    tableTrunk: null,
    isFileImported: false,
  };

  if (!file) {
    result.validity = ' is-danger';
    result.feedback = 'Busque y seleccione un archivo (fichero) de tipo CSV.';
  } else if (file.size === 0) {
    result.validity = ' is-danger';
    result.feedback = 'Archivo (fichero) vacío.';
  } else if (getExtension(file.name) !== 'csv') {
    result.validity = ' is-danger';
    result.feedback = 'Tipo de archivo (fichero) incorrecto.';
  } else {
    const fileEncoding = getEncoding(file);
    const fileData = readFile(file, fileEncoding);

    if (fileData.hasCorrectHeader) {
      result.fileName = file.name;
      result.validity = ' is-success';
      result.feedback = 'Archivo (fichero) preparado para procesar.';
      result.cardTitle = fileData.isUsableTo;
      result.zmpData = fileData.zmpData;
      result.tableHead = fileData.tableHead;
      result.tableTrunk = fileData.tableTrunk;
      result.isFileImported = true;
    } else {
      result.validity = ' is-danger';
      result.feedback = 'Contiene datos no procesables.';
    }
  }
  return result;
}

const status = {
  0: {
    validity: ' is-success',
    feedback: 'Archivo (fichero) importado correctamente.',
    cardTitle: 'Datos Importados',
    errorMsg: '',
  },
  1: {
    validity: ' is-info',
    feedback: 'Busque y seleccione un archivo (fichero) de tipo CSV.',
    cardTitle: 'Pista',
    errorMsg: `<p>
                Se necesita buscar y seleccionar el archivo (fichero) de
                extensión .csv que contenga los datos a ser exportados.
                Recuerde que este archivo debe tener una cabecera indicando
                el comando zmprov, en forma abreviada, y los atributos.
               </p>`,
  },
  2: {
    validity: ' is-danger',
    feedback: 'Archivo (fichero) vacío.',
    cardTitle: 'Problema Encontrado: Archivo (fichero) vacío',
    errorMsg: `<p>
                Este problema se debe a que el archivo (fichero) seleccionado
                no contiene ningún dato, es decir, está vacío.
               </p>`,
  },
  3: {
    validity: ' is-danger',
    feedback: 'Tipo de archivo (fichero) incorrecto.',
    cardTitle: 'Problema Encontrado: Tipo de archivo (fichero) incorrecto',
    errorMsg: `<p>
                Este problema se debe a que la extensión del archivo (fichero)
                seleccionado no es csv.
               </p>
               <p>
                Para saber más al respecto, consulte
                <a href="https://es.wikipedia.org/wiki/Valores_separados_por_comas"
                rel="external" target="_blank">este enlace</a>.'`,
  },
  4: {
    validity: ' is-danger',
    feedback: 'Contiene datos no procesables.',
    cardTitle: 'Problema Encontrado: Contiene datos no procesables',
    errorMsg: `<p>
                Este problema puede deberse a alguna de las siguientes causas:
                <ul><li>El archivo seleccionado no contiene la cabecera</li></ul>
                <ul><li>El archivo seleccionado sí contiene la cabecera pero en
                        orden incorrecto</li></ul>
                <ul><li>El archivo seleccionado contiene datos que no son de
                        tipo texto.</li></ul>
               </p>`,
  },
  1: {
    validity: ' is-info',
    feedback: 'Busque y seleccione un archivo (fichero) de tipo CSV.',
    cardTitle: 'Ayuda',
    errorMsg: `'Se necesita buscar y seleccionar el archivo csv que contiene los
              datos a ser exportados. Recuerde que este archivo debe tener una
              cabecera indicando el comando zmprov abreviado y los atributos.'`,
  },
};

export default stateHelper;