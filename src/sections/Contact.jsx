import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
const Contact = () => {
    const formRef = useRef();


const [loading, setLoading] = useState(false);
const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
})

const handleChange = ({target: {name, value}}) => {
    setForm({...form, [name]: value})
}

// service_zpsgtje

const handleSubmit = async (e) => {
  e.preventDefault();

  setLoading(true);

  try {
      await emailjs.send('service_zpsgtje', 
                  'template_194hcfh',
                   {from_name: form.name, to_name: 'Angel', 
                    from_email: form.email,
                     to_email: 'angelgerenavazquez@outlook.com', 
                     message: form.message},
                     'w9WzpVB25JWPv0_og'
                     );
                     
      setLoading(false);
      alert('Thank you. I will get back to you as soon as possible.');
      setForm({name: '', email: '', message: ''})

  } catch (error) {

      setLoading(false);    
      console.log(error);

      alert('Sorry there was an error sending your message. Please try again.');
  }
}


  return (
   <section className="c-space my-20">
    <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img src={`${import.meta.env.BASE_URL}assets/terminal.png`} alt="terminal background" className="absolute inset-0 min-h-screen" />
        <div className="contact-container">

  <h3 className="head-text mt-14">How may I help you?</h3>
  <p className="text-lg text-purple-500 mt-12">I’m eager to apply my skills and discipline to bring your project to life. 
    While I’m still growing in my career, I’m committed to delivering quality work and bringing your vision to reality.</p>

    <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7"> 
        <label className='space-y-3'>
        <span className="field-label">Full Name</span>
         <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="field-input"
            placeholder="Please enter your name here"
          />
        </label>


        <label className='space-y-3'>
        <span className="field-label">Email</span>
         <input
            type="text"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="field-input"
            placeholder="Please enter your email here"
          />
        </label>

        <label className='space-y-3'>
        <span className="field-label">Your Message</span>
         <textarea
            type="text"
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
            className="field-input"
            placeholder="Hey, I want to give you a job lol..."
          />
        </label>
         <button className="field-btn" type="submit" disabled={loading}>
         {loading ? 'Sending...' : 'Send Message'}
         
         <img src={`${import.meta.env.BASE_URL}assets/arrow-up.png`} alt= "arrow-up" className="field-btn_arrow" />
        </button>
    </form>

        </div>
    </div>

   </section>
  )
}

export default Contact
