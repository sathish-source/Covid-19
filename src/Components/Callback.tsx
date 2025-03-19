import { IoCall } from 'react-icons/io5'
import CallBack from '../assets/callback.jpg'
import '../App.css'


const Callback = () => {
    return (
        <>
           <form className='flex z-10 my-50'>
                <div className='callbackimg py-20 flex flex-col md:flex-row h-1/4  text-center md:text-start justify-center items-center md:justify-between w-full'>
                    <div>
                        <h1 className='text-[3rem]'>Become a volunteer or <br /> health care worker staffer.</h1>
                        <div className='flex'>
                            <input placeholder='Enter the Number' className='bg-white p-4 w-3/4' type="text" required />
                            <button className="flex ms-1 bg-red-600 items-center p-2 hover:bg-blue-950 text-white text-2xl w-[10rem]"><IoCall className="h-5 me-3 self-center  text-white" />Call us</button>
                        </div>
                    </div>
                </div>
            </form>
                    <div className=' mt-[-15rem] mx-auto md:mt-[-41rem] md:ml-[60rem] flex self-center'>
                        <img className='h-[500px] mt-5 ' src={CallBack} alt="CallBack" />
                    </div>
        </>
    )
}

export default Callback