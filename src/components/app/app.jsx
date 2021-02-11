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
      statusCode: null,
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
        validity: ' is-info',
        feedback: 'Busque y seleccione un archivo (fichero) de tipo CSV.',
        cardTitle: 'Ayuda',
        zmprovCmd: '',
        statusCode: 1,
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
        cardTitle: 'Problema Encontrado: Archivo (fichero) vacío',
        zmprovCmd: '',
        statusCode: 2,
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
        cardTitle: 'Problema Encontrado: Tipo de archivo (fichero) incorrecto',
        zmprovCmd: '',
        statusCode: 3,
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
            cardTitle: 'Datos Importados desde: <code>' + fileInput.name + '</code>',
            zmprovCmd: header[0],
            statusCode: 0,
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
            cardTitle: 'Problema Encontrado: Contiene datos no procesables',
            zmprovCmd: '',
            statusCode: 4,
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
        feedback: 'Este archivo (fichero) ha sido procesado correctamente.',
        cardTitle: 'Éxito',
        zmprovCmd: head[0],
        statusCode: 0,
        readHeader: null,
        readData: null,
        isFileImported: true,
        isFileExported: true,
      });
      const blob = new Blob([zmpData], { type: 'text/plain;charset=utf-8;' });
      saveAs(blob, zmprovCmd[head[0]] + 'in-batch.zmp');
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
        statusCode={this.state.statusCode}
        tableHead={this.state.readHeader}
        tableTrunk={this.state.readData}
        isFileImported={this.state.isFileImported}
        isFileExported={this.state.isFileExported}
      />
    );
  }
}

export default App;