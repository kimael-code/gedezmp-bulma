import zmprovCmdFullName from '../../utils/zmprov-commands';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/**
 * Renderiza el contenido del mensaje.
 * @param {Object} props Propiedades pasadas desde arriba.
 */
const MessageBody = (props) => {
  const importedFileName = props.fileName
  const exportedFileName = zmprovCmdFullName[props.zmprovCmd] +
    '-in-batch.zmp';

  switch (props.statusCode) {
    case 0:
      return (
        <div className="message-body">
          <p>
            El archivo (fichero) {importedFileName} ha sido exportado
            correctamente como: <code className="is-flex-wrap-wrap">{exportedFileName}</code>.
          </p>
          <p>
            Ejemplo de uso:
            <code className="is-flex-wrap-wrap">
              <span className="has-text-link">
                zimbra@mail-server
              </span>:
              <span className="has-text-success">
                ~
              </span>
              $ zmprov -f {exportedFileName}
            </code>
          </p>
        </div>
      );
    case 1:
      return (
        <div className="message-body">
          <p>
            Se necesita el archivo (fichero) de extensión <code>.csv</code>,
            que contenga los datos a ser exportados.
            Para ubicar y seleccionar dicho archivo, haga clic o pulse en el
            botón <strong>Seleccionar archivo</strong> ubicado más arriba.
          </p>
          <p>
            <em>
              Recuerde que el archivo CSV debe tener una cabecera indicando,
              en primer lugar, el comando zmprov en forma abreviada, seguido de
              los atributos si los hubiere.
            </em>
            Las siguientes líneas del archivo, deben contener los respectivos
            valores para el comando y los atributos especificados en la
            cabecera en igual orden.
          </p>
        </div>
      );
    case 2:
      return (
        <div className="message-body">
          <p>
            Este problema se debe a que el archivo (fichero) <code className="is-flex-wrap-wrap">{importedFileName}</code> no contiene ningún dato, es decir,
            está vacío.
          </p>
        </div>
      );
    case 3:
      return (
        <div className="message-body">
          <p>
            Este problema se debe a la extensión del archivo (fichero) <code className="is-flex-wrap-wrap">{importedFileName}</code>.
            <p>
              <em>
                Gedezmp solamente funciona con archivos cuyos nombres
                terminen en<code>.csv</code>
              </em>.
            </p>
          </p>
          <p>
            Para saber más al respecto, consulte&nbsp;
            <a
              href="https://es.wikipedia.org/wiki/Valores_separados_por_comas"
              rel="external"
              target="_blank"
            >
              <FontAwesomeIcon icon={faExternalLinkAlt} /> este artículo de Wikipedia
            </a>.
          </p>
        </div>
      );
    case 4:
      return (
        <div className="message-body">
          <p>
            Este problema puede deberse a una de las siguientes causas:
          </p>
          <ul>
            <li>
              <code className="is-flex-wrap-wrap">{importedFileName}</code> no contiene la cabecera
            </li>
            <li>
              <code className="is-flex-wrap-wrap">{importedFileName}</code> sí contiene la cabecera
              pero en orden incorrecto
            </li>
            <li>
              <code className="is-flex-wrap-wrap">{importedFileName}</code> contiene datos que no son
              de tipo texto
            </li>
          </ul>
        </div>
      );
    default:
      return null;
  }
}

export default MessageBody;