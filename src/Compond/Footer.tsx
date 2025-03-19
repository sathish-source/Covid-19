
import logo from '../assets/primary-logo.svg'
import logo2 from '../assets/icons8-double-right-100.png'
import twitter from '../assets/twiter.svg'
import facebook from '../assets/facebook.svg'
import linkedin from '../assets/linkedin.svg'

const Footer = () => {
    return (
        <div>
            <div className='p-10 flex  w-full md:w-3/8 md:relative  md:top-30 text-white text-xl bg-red-700'>
                <div>
                <h1 className=' text-3xl'>Sign Up Newsletter</h1>
                <p className=''>Receive Weekly Newsletter in your mailbox.</p>
                <form className='flex flex-col md:flex-row'>
                    <input  className='px-8 input py-3 text-black placeholder:text-gray-400 bg-white' type="email" placeholder="Enter Email Address" required />
                    <a type='button' > <img className='h-10 flex items-center mt-2 ms-2' src={logo2} alt="double-arrow" /></a>
                </form>
                </div>
            </div>
            

            <div  className='w-full bg-gray-200 justify-center text-center md:pr-[9rem] md:text-start md:w-5/6 h-full'>
                <div className='flex   gap-5 p-10 justify-end'>
                    <img className='h-15 p-2 ms-2' src={facebook} alt="facebook" />
                    <img className='h-15 p-2 ms-2' src={linkedin} alt="linkedin" />
                    <img className='h-15 p-2 ms-2' src={twitter} alt="twitter" />
                </div>
                <div  className="p-1 flex justify-center md:block mt-3 pt-30 ">
                    <img className='w-[15rem]' src={logo} />
                </div>
                <div  className='flex flex-col  md:flex-row md:justify-between p-3 '>
                    <h5 className='text-gray-600 text-lg' >Patricia C. Amedee 4401 <br />
                        Waldeck Street Grapevine<br />
                        Nashville, TX 76051 <br />
                        +99 (0) 101 0000 888</h5>

                    <h2 className='text-gray-900 p-2 text-3xl '>
                        About Coronavirus <br />
                        General Informations <br />
                        F.A.Q. <br />
                        Contact <br />
                        404
                    </h2>

                </div>


                <div className='text-gray-600 flex justify-end mt-3 p-3'>
                    © 2020 ARTBEES. JUPITER WORDPRESS THEME DEMO. ALL RIGHTS RESERVED
                </div>

            </div>

        </div>
    )

}

export default Footer
