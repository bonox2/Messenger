export default function CreateChatMessage() {
  function sendMessage() {}
  return (
    <form onSubmit={sendMessage}>
      <input
        type="text"
        placeholder="Type a message"
        name="messageText"
        className="chat_msg"
      />
      <button type="submit">Send</button>
    </form>
  );
}
