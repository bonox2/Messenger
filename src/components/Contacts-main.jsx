import {ContactSection} from './Contact'
import {Search} from './Search'


function Contacts() {


    return (
      <section className='contacts_main'>

          <Search></Search>

          <div className='contacts'>
            <ContactSection/>
            <ContactSection/>
            <ContactSection/>
          </div>
      </section>
    )
    
  }
  
  export default Contacts