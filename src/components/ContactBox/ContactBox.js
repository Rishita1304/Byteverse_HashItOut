import React from 'react'

import './ContactBox.css'
const ContactBox = () => {
  return (
    <section className='contact section' id='contact'>
        <h2 className='section__title'>Want to Get in touch?</h2>
    <div className='contact__container container grid'>
        <div className='contact__content'>
            <form className='contact__form'>
                <div className='contact__form-div'>
                    <label className='contact__form-tag'>Name</label>
                    <input type='text' name='name' className='contact__form-input' placeholder='Enter your name' />
                </div>
                <div className='contact__form-div'>
                    <label className='contact__form-tag'>Mail</label>
                    <input type='email' name='email' className='contact__form-input' placeholder='Enter your email' />
                </div>
                <div className='contact__form-div contact__form-area'>
                    <label className='contact__form-tag'>Message</label>
                    <textarea name='project' cols='30' rows='40' className='contact__form-input' placeholder='Enter the message' />
                </div>
                <input className='button'
                    type="submit" value="Send" />
            </form>
        </div>
        <div className='contact__content' data-aos='flip-up'>
        <div className="map">
              <div className="mapouter gmap_canvas"><iframe id="gmap_canvas" src="https://maps.google.com/maps?q=%new%delhi&t=k&z=15&ie=UTF8&iwloc=&output=embed" title='map'></iframe></div>
            </div>
        </div>
    </div>
</section>
  )
}

export default ContactBox
