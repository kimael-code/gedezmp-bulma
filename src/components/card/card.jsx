import TablePreview from '../table/table';
import Message from '../message/message';

const CardContent = (props) => {
  if (props.isFileImported && !props.isFileExported) {
    return (
      <TablePreview
        head={props.tableHead}
        trunk={props.tableTrunk}
      />
    );
  } else {
    return (
      <Message
        fileName={props.fileName}
        validity={props.validity}
        feedback={props.feedback}
        zmprovCmd={props.zmprovCmd}
        isFileImported={props.isFileImported}
        isFileExported={props.isFileExported}
      />
    );
  }
}

/**
 * Renderiza la tarjeta que contiene la tabla de los datos
 * leídos del csv si, y sólo si, el csv está correcto.
 * @param {Object} props Propiedades pasadas desde arriba.
 */
const Card = (props) => {
  return (
    <div className="card">
      <header className="card-header has-background-link-light">
        <p className="card-header-title has-text-black">
        
          {props.cardTitle}
        </p>
      </header>
      <div className="card-content">
        <div className="content">
          {CardContent}
        </div>
      </div>
    </div>
  );
}

export default Card;