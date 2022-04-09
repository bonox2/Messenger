import profileImg from '../img/profile.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera, faInfo, faPhone } from '@fortawesome/free-solid-svg-icons'




function Chat() {


    return (
      <section className='chat'>
          <div className="chat_top">
              <div className='chat_user_info'>
                <img src={profileImg} alt="Profile picture" className='profile_pic'/>
                <div className='contact_name'>Signore</div>
              </div>
              <div className='call_btns'>
                  <button className='call_btn'><FontAwesomeIcon icon={faPhone}/></button>
                  <button className='call_btn'><FontAwesomeIcon icon={faCamera}/></button>
                  <button className='call_btn'><FontAwesomeIcon icon={faInfo}/></button>
              </div>
          </div>
          <div className="chat_bottom">
              <input type="text" placeholder='Type a message' name="send message" className='chat_msg'/>
          </div>
      </section>
    )
  }
  
  export default Chat