import jschardet from "jschardet";

/**
 * Devuelve la cadena de la codificación detectada en el archivo.
 * @param {File} file Archivo seleccionado por el usuario.
 */
const getEncoding = (file) => {
  let encoding = '';
  const filereader = new FileReader();

  filereader.onloadend = (event) => {
    if (event.target.error !== null) {
      const splittedFile = event.target.result.split(/\r|\n|\r\n/);

      encoding = jschardet.detect(splittedFile.toString()).encoding;
    }
  }

  filereader.readAsBinaryString(file);
  return encoding;
};

export { getEncoding };