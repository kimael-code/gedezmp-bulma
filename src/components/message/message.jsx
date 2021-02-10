const Message = (props) => (
  <article className="message is-info">
    <div className="message-body">
      <p>
        Archivo exportado correctamente: <code>createAccount-in-batch.zmp</code>
      </p>
      <p>
        Ejemplo de uso:
        <code>
          <span className="has-text-success">
            zimbra@mail-server
          </span>:
          <span className="has-text-link">
            ~
          </span>
          $ zmprov -f createAccount-in-batch.zmp
        </code>
      </p>
    </div>
  </article>
);

export default Message;