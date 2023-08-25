import React from 'react'
import "./FooterStyles.css"
import { FaFacebook, FaGithub, FaHome, FaLinkedin } from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
             <div className='left'>
                <div className='location'>
                <FaHome size={30} style={{
                    color: "#fff", marginRight:"2rem" 
                    }}/>
                    <div>
                        <p> Sri Lanka</p>
                    </div>
               </div>
               <div className='social'>
<FaLinkedin size={40} style={{
                    color: "#fff", marginRight:"1rem" 
                    }}/>
<FaGithub size={40} style={{
                    color: "#fff", marginRight:"1rem" 
                    }}/>

</div>
                {/* <div className='email'>
               <h4>
               <FaMailBulk size={20} style={{
                    color: "#fff", marginRight:"2rem" 
                    }}/>
                    malinshakv@gmail.com
                </h4> 
                </div> */}
             </div>
             <div className='right'>
                <h4>About me</h4>
                <p>Malinsha Vithanage</p>
<p>
Undergraduate | Faculty of IT, </p><p>
University of Moratuwa</p>

             </div>
        </div>
      
    </div>
  )
}

export default Footer
