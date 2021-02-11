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
        statusCode={props.statusCode}
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
  if (props.statusCode === null) {
    return null;
  }

  return (
    <section className="section">
      <div className="card">
        <header className="card-header has-background-link-light">
          <p
            className="card-header-title has-text-black"
            dangerouslySetInnerHTML={{__html: props.cardTitle}}
          >
          </p>
        </header>
        <div className="card-content">
          <div className="content">
            <CardContent
              fileName={props.fileName}
              validity={props.validity}
              feedback={props.feedback}
              cardTitle={props.cardTitle}
              zmprovCmd={props.zmprovCmd}
              statusCode={props.statusCode}
              tableHead={props.tableHead}
              tableTrunk={props.tableTrunk}
              isFileImported={props.isFileImported}
              isFileExported={props.isFileExported}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Card;