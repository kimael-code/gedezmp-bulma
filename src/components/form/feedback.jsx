/**
 * Renderiza el mensaje de validación del campo.
 * @param {Object} props Propiedades pasadas desde arriba.
 */
const Feedback = (props) => {
  return (
    <p className={`help${props.validity}`}>
     {props.feedback}
    </p>
  );
}

export default Feedback;