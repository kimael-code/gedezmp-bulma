import { Component } from 'react';
import Layout from '../layout/layout';
import { saveAs } from 'file-saver';
import { getExtension } from '../../utils/get-file-extension';
import zmprovCmd from '../../utils/zmprov-commands';


/**
 * Aplicación Gedezmp.
 */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fileName: '...',
      validity: '',
      feedback: '',
      cardTitle: '',
      zmprovCmd: '',
      readHeader: null,
      readData: null,
      isFileImported: false,
      isFileExported: false,
    };
    this.handleFileChange = this.handleFileChange.bind(this);
    this.handleFileSubmit = this.handleFileSubmit.bind(this);
  }

  handleFileChange(fileInput) {
    if (!fileInput) {
      this.setState({
        fileName: '...',
        validity: ' is-danger',
        feedback: 'Busque y seleccione un archivo (fichero) de tipo CSV.',
        cardTitle: '',
        zmprovCmd: '',
        readHeader: null,
        readData: null,
        isFileImported: false,
        isFileExported: false,
      });

    } else if (fileInput.size === 0) {
      this.setState({
        fileName: fileInput.name,
        validity: ' is-danger',
        feedback: 'Archivo (fichero) vacío.',
        cardTitle: '',
        zmprovCmd: '',
        readHeader: null,
        readData: null,
        isFileImported: false,
        isFileExported: false,
      });
    } else if (getExtension(fileInput.name) !== 'csv') {
      this.setState({
        fileName: fileInput.name,
        validity: ' is-danger',
        feedback: 'Tipo de archivo (fichero) incorrecto.',
        cardTitle: '',
        zmprovCmd: '',
        readHeader: null,
        readData: null,
        isFileImported: false,
        isFileExported: false,
      });
    } else {
      const fileReader = new FileReader();
      fileReader.readAsText(fileInput);

      fileReader.onload = async (e) => {
        const textByLine = (e.target.result).split('\n');
        textByLine.pop(); // no necesito la última línea vacía

        const header = textByLine.shift().split(',');

        if (zmprovCmd[header[0]] !== undefined) {
          const textByCommas = textByLine.map(line => line.split(','));

          this.setState({
            fileName: fileInput.name,
            validity: ' is-success',
            feedback: 'Archivo (fichero) importado correctamente.',
            cardTitle: 'Datos Importados',
            zmprovCmd: header[0],
            readHeader: header,
            readData: textByCommas,
            isFileImported: true,
            isFileExported: false,
          });
        } else {
          this.setState({
            fileName: fileInput.name,
            validity: ' is-danger',
            feedback: 'Contiene datos no procesables.',
            cardTitle: 'Problema Encontrado',
            zmprovCmd: '',
            readHeader: null,
            readData: null,
            isFileImported: false,
            isFileExported: false,
          });
        }
      }
    }
  }

  handleFileSubmit(fileInput) {
    let zmpData = '';
    const data = this.state.readData;
    const head = this.state.readHeader;

    data.forEach(value => {
      head.forEach(word => zmpData += word + ' ' + value.shift() + ' ');
      zmpData += '\n';
    });

    if (zmpData !== '') {
      this.setState({
        fileName: fileInput.name,
        validity: ' is-success',
        feedback: 'Este archivo (fichero) ya ha sido procesado correctamente.',
        cardTitle: 'Éxito',
        zmprovCmd: head[0],
        readHeader: null,
        readData: null,
        isFileImported: true,
        isFileExported: true,
      });
      const blob = new Blob([zmpData], { type: 'text/plain;charset=utf-8;' });
      saveAs(blob, 'batch-ready.zmp');
    }
  }

  render() {
    return (
      <Layout
        onFileChange={this.handleFileChange}
        onFileSubmit={this.handleFileSubmit}
        fileName={this.state.fileName}
        validity={this.state.validity}
        feedback={this.state.feedback}
        cardTitle={this.state.cardTitle}
        zmprovCmd={this.state.zmprovCmd}
        tableHead={this.state.readHeader}
        tableTrunk={this.state.readData}
        isFileImported={this.state.isFileImported}
        isFileExported={this.state.isFileExported}
      />
    );
  }
}

export default App;