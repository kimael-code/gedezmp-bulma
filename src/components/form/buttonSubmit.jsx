import { faFileExport } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/**
 * Renderiza un botón tipo submit.
 */
const ButtonSubmit = () => {
  return (
    <button type="submit" className="button is-link is-light">
      <span className="icon">
        <FontAwesomeIcon icon={faFileExport} />
      </span>
      <span>Exportar</span>
    </button>
  );
}

export default ButtonSubmit;