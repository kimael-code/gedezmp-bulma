import React, { Component } from "react";
import Feedback from './feedback';
import ButtonSubmit from './buttonSubmit';
import { faFileImport } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/**
 * Formulario de la aplicación Gedezmp.
 */
class Form extends Component {
  constructor(props) {
    super(props);
    this.fileInput = React.createRef();

    this.handleFileChange = this.handleFileChange.bind(this);
    this.handleFileSubmit = this.handleFileSubmit.bind(this);
  }

  handleFileChange(event) {
    event.preventDefault();
    if (this.fileInput.current) {
      this.props.onFileChange(this.fileInput.current.files[0]);
    } else {
      this.props.onFileChange(null);
    }
  }

  handleFileSubmit(event) {
    event.preventDefault();
    if (this.fileInput.current) {
      this.props.onFileSubmit(this.fileInput.current.files[0]);
    } else {
      this.props.onFileSubmit(null);
    }
  }

  render() {
    return (
      <form onSubmit={this.handleFileSubmit} noValidate={true}>
        <div className="field">
          <div className={`file has-name is-fullwidth is-right${this.props.validity}`}>
            <label className="file-label">
              <input
                className="file-input"
                type="file"
                name="csvInput"
                accept=".csv"
                onChange={this.handleFileChange}
                ref={this.fileInput}
              />
              <span className="file-cta">
                <span className="file-icon">
                  <FontAwesomeIcon icon={faFileImport} />
                </span>
                <span className="file-label">
                  Importar CSV
                  </span>
              </span>
              <span className="file-name">
                {this.props.fileName}
                </span>
            </label>
          </div>
          <Feedback
            validity={this.props.validity}
            feedback={this.props.feedback}
          />
        </div>

        <div className="field">
          <div className="control">
            {(this.props.isFileImported && !this.props.isFileExported)
              ? <ButtonSubmit />
              : null
            }
          </div>
        </div>
      </form>
    );
  }
}

export default Form;