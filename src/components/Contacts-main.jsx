
import {ContactSection} from './Contact'

function Contacts() {


    return (
      <section className='contacts_main'>

          <input type="text" placeholder='Search' name="searchContact" className='search_contact'/>

          <div className='contacts'>
            <ContactSection/>
            <ContactSection/>
            <ContactSection/>
            <ContactSection/>
          </div>
      </section>
    )
  }
  
  export default Contacts