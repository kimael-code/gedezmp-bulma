import zmprovCmd from "./zmprov-commands";

/**
 * Devuelve un objeto que puede contener los datos leídos del archivo.
 * @param {File} file Archivo a ser leído.
 * @param {string} encoding Codificación del archivo a ser leído.
 */
const readFile = (file, encoding) => {
  const fileReader = new FileReader();

  let result = {
    isUsableTo: '',
    zmpData: '',
    tableHead: null,
    tableTrunk: null,
    hasCorrectHeader: false,
  };

  fileReader.onload = async (e) => {
    const textByLine = (e.target.result).split('\n');
    textByLine.pop(); // no necesito la última línea vacía
    const header = textByLine.shift().split(',');
    let zmpData = '';

    if (zmprovCmd[header[0]] !== undefined) {
      const textInArray = textByLine.map(row => row.split(','));

      textInArray.forEach(row => {
        header.forEach(head => zmpData += head + ' ' + row.shift() + ' ');
        zmpData += '\n';
      });
      //textInArray.pop();
      result.isUsableTo = zmprovCmd[header[0]];
      result.zmpData = zmpData;
      result.tableHead = header;
      result.tableTrunk = textInArray;
      result.hasCorrectHeader = true;
    }
  }
  fileReader.readAsText(file, encoding);
  return result;
}

export { readFile };