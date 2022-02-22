import profileImg from '../img/profile.png'

function ContactSection() {


    return (
            <div className='contact_section'>
              <img src={profileImg} alt="Profile picture" className='profile_pic'/>
              <div className='user_info'>
                <div className='contact_info'>
                  <div className='contact_name'>susssquad</div>
                  <div className='contact_msg'>You: A littel worried...  <span className='last_seen_time'>3:39 AM</span></div>
                </div>
              </div>
            </div>
    )
  }
  
  export {ContactSection}