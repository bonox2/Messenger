export default function CreateChatMessage() {
  function sendMessage() {}
  return (
    <form onSubmit={sendMessage} className="chat_msg">
      <input
        type="text"
        placeholder="Type a message"
        name="messageText"
        className="msg_send"
      />
      <button type="submit" className="send_btn">Send</button>
    </form>
  );
}
