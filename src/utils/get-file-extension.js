/**
 * Devuelve los caracteres posteriores al último punto encontrado
 * en una cadena.
 * @param {string} str Nombre completo del archivo, incluyendo extensión.
 */
const getExtension = (str) => str.split('.').pop();

export { getExtension };