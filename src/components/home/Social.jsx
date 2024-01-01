import React from 'react'

const Social = () => {
    return (
        <div className="home__social">
            <a href="https://medium.com/@atifzahoorarsh" className="home__social-icon" target='_blank'>
            <i class="bx bxl-medium"></i>
            </a>

            <a href="https://atifzahoorarsh@gmail.com" className="home__social-icon" target='_blank'>
                <i className="bx bx-mail-send contact__card-icon"></i>
            </a>

            <a href="https://api.whatsapp.com/send?phone=923319597206&text=Hello" className="home__social-icon" target='_blank'>
                <i class="uil uil-whatsapp"></i>
            </a>

            <a href="https://www.linkedin.com/in/atif-zahoor-3026b82a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="home__social-icon" target='_blank'>
                <i class="uil uil-linkedin-alt"></i>
            </a>

        </div>
    )
}

export default Social
