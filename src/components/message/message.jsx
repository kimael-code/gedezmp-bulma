import MessageContent from './messageBody';

const Message = (props) => (
  <article className={`message${props.validity}`}>
    <MessageContent
      fileName={props.fileName}
      zmprovCmd={props.zmprovCmd}
      statusCode={props.statusCode}
    />
  </article>
);

export default Message;