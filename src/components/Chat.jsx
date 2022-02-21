import profileImg from '../img/profile.png'





function Chat() {


    return (
      <section className='chat'>
          <div className="chat_top"><img src={profileImg} alt="Profile picture" className='profile_pic'/></div>
          <div className="chat_bottom">
            <input type="text" placeholder='Type a message' name="send message" className='chat_msg'/>
          </div>
      </section>
    )
  }
  
  export default Chat