import './Footer.css'
import logo from './imges/primary-logo.svg'
import logo2 from './imges/icons8-double-right-100.png'
import twitter from './imges/twiter.svg'
import facebook from './imges/facebook.svg'
import linkedin  from './imges/linkedin.svg'

const Footer = () => {
    return (
        <div>
            <div id="foot-1" className='p-5'>
                <h1 className='mb-3'>Sign Up Newsletter</h1>
                <p className='mb-3'>Receive Weekly Newsletter in your mailbox.</p>
                <input id='input' className='p-4' type="email" placeholder="Enter Email Address" required /> <img  className='col-1 ms-2' src={logo2} alt="double-arrow" />
               
            </div>

            <div id='conty' className='col-10'>
                <div id="icon-to-footer" className="col-2 p-1 mt-3 z-index-1">
                    <img src={logo} />
                </div>
                <div className='d-flex justify-content-end'>
                <img className='logo p-2 ms-2' src={facebook} alt="facebook" />
                <img className='logo p-2 ms-2' src={linkedin} alt="linkedin" />
                <img className='logo p-2 ms-2' src={twitter} alt="twitter" />
                </div>
                <div id='details' className='d-flex justify-content-between p-2 '>
                    <h5 className='text-secondary' >Patricia C. Amedee 4401 <br />
                        Waldeck Street Grapevine<br />
                        Nashville, TX 76051 <br />
                        +99 (0) 101 0000 888</h5>

                    <h2 className='align'>
                        About Coronavirus <br />
                        General Informations <br />
                        F.A.Q. <br />
                        Contact <br />
                        404
                    </h2>

                </div>


                <div className='text-secondary d-flex justify-content-end mt-3 p-3'>
                    © 2020 ARTBEES. JUPITER WORDPRESS THEME DEMO. ALL RIGHTS RESERVED
                </div>
               
            </div>

        </div>
    )

}

export default Footer
