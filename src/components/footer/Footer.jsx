import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Atif</h1>

                <div className="footer__social">

                <a href="https://atifzahoorarsh@gmail.com" className="footer__social-link" target='_blank'>
                        <i class="bx bxl-gmail"></i>
                    </a>

                     <a href="https://www.linkedin.com/in/atif-zahoor-3026b82a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="footer__social-link" target='_blank'>
                        <i class="bx bxl-linkedin"></i>
                    </a>

                    <a href="https://api.whatsapp.com/send?phone=923319597206&text=Hello" className="footer__social-link" target='_blank'>
                        <i class="bx bxl-whatsapp"></i>
                    </a>



                    <a href="https://atifzahoorarsh@gmail.com" className="footer__social-link" target='_blank'>
                        <i class="bx bxl-medium"></i>
                    </a>

                </div>

                <span className='footer__copy'>
                    &#169; Atif Zahoor. <br /> All rights reserved
                </span>
            </div>
        </footer>
    )
}

export default Footer
