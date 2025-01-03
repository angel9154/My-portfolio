import React from 'react'

const Footer = () => {
  return (
    <footer className="f-space pt-7 pb-3  border-black-300 flex justify-between items-center flex-wrap gap-5">
            <div className="text-white-500 flex gap-2 " >
                <p>Terms & Conditions</p>
                <p> | </p>
                <p>Privacy Policy</p>
                 </div>
                  
                 <div className="flex gap-3">
                 <div className='social-icon flex justify-center items-center'>
  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center">
    <img src={`${import.meta.env.BASE_URL}assets/instagram.svg`} alt="instagram" className="w-1/2 h-1/2" />
  </a>
</div>
<div className='social-icon flex justify-center items-center'>
  <a href="www.linkedin.com/in/angel-gerena-vazquez-a8a91b212" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center">
    <img src={`${import.meta.env.BASE_URL}assets/linkedin.png`} alt="linkedin" className="w-1/2 h-1/2" />
  </a>
</div>
                    
                 </div>
    </footer>
  )
}

export default Footer
