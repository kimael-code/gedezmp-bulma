import { Component } from "react";

/**
 * Renderiza la cabecera de la tabla.
 * @param {Object} props Propiedades pasadas desde arriba.
 */
const TableHead = (props) => {
  const columns = props.head.map((value, index) =>
    <th key={index} className="has-text-white">
      {value}
    </th>
  );
  return (
    <thead className="has-background-grey-dark">
      <tr>
        {columns}
      </tr>
    </thead>
  );
}

/**
 * Renderiza la celda de la tabla.
 * @param {string} value Valor a mostrar en la celda.
 * @param {number} index Posición del valor dentro del arreglo.
 */
const getTd = (value, index) => {
  return (
    <td key={index}>
      {value}
    </td>
  );
}

/**
 * Renderiza la fila de la tabla.
 * @param {Array} value Arreglo de los valores a mostrar.
 * @param {number} index Posición dentro del arreglo.
 */
const getRow = (value, index) => {
  return (
    <tr key={index}>
      {value.map(getTd)}
    </tr>
  );
}

/**
 * Renderiza los datos de la tabla.
 * @param {Object} props Propiedades pasadas desde arriba.
 */
const TableTrunk = (props) => {
  const data = props.trunk.map(getRow);
  return (
    <tbody>
      {data}
    </tbody>
  );
}

/**
 * Renderiza la tabla completa con los datos leídos del csv.
 */
class TableReadFile extends Component {
  render() {
    return (
      <div className="table-container">
        <table className="table is-hoverable is-fullwidth">
          <TableHead
            head={this.props.head}
          />
          <TableTrunk
            trunk={this.props.trunk}
          />
        </table>
      </div>
    );
  }
}

export default TableReadFile;