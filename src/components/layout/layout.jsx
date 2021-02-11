import SectionHero from '../hero/hero';
import SectionForm from '../form/form';
import SectionCard from '../card/card';

const Layout = (props) => {
  return (
    <div className="column">
      <SectionHero />

      <SectionForm
        onFileChange={props.onFileChange}
        onFileSubmit={props.onFileSubmit}
        fileName={props.fileName}
        validity={props.validity}
        feedback={props.feedback}
        isFileImported={props.isFileImported}
        isFileExported={props.isFileExported}
      />

      <SectionCard
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
  )
}

export default Layout;