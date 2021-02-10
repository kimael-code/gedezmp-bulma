import Hero from '../hero/hero';
import Form from '../form/form';
import Card from '../card/card';

const Layout = (props) => (
  <div className="column">
    <Hero />

    <section className="section">
      <Form
        onFileChange={props.onFileChange}
        onFileSubmit={props.onFileSubmit}
        fileName={props.fileName}
        validity={props.validity}
        feedback={props.feedback}
        isFileImported={props.isFileImported}
        isFileExported={props.isFileExported}
      />
    </section>

    <section className="section">
      <Card
        fileName={props.fileName}
        validity={props.validity}
        feedback={props.feedback}
        cardTitle={props.cardTitle}
        zmprovCmd={props.zmprovCmd}
        tableHead={props.tableHead}
        tableTrunk={props.tableTrunk}
        isFileImported={props.isFileImported}
        isFileExported={props.isFileExported}
      />
    </section>
  </div>
);

export default Layout;