import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'
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

// service_xs5ikpc

const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
}

  return (
   <section className="c-space my-20">
    <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img src="/assets/terminal.png" alt="terminal background" className="absolute inset-0 min-h-screen" />
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
         <button className="field-btn" type="submit" disable={loading}>
         {loading ? 'Sending...' : 'Send Message'}
         
         <img src="/assets/arrow-up.png" alt= "arrow-up" className="field-btn_arrow" />
        </button>
    </form>

        </div>
    </div>

   </section>
  )
}

export default Contact
