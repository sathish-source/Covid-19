import Doctor1 from '../assets/Docter1.jpg'
import Doctor2 from '../assets/Docter2.jpg'
import Doctor3 from '../assets/Docter3.jpg'
import Doctor4 from '../assets/Docter4.jpg'
import Doctor5 from '../assets/Docter5.jpg'
import Doctor6 from '../assets/DocterLast.jpg'

const Doctersec = () => {
    return (
        <>
            <div className='flex flex-col md:flex-row'>
                <div className=' w-full md:w-1/3  bg-red-600  content-center col-4 me-5'>
                    <h1 className='col-4 text-white  text-[4rem] text-center'>Doctors Working Hard for Cure</h1>
                </div>
                <div className='w-full  md:w-2/3 flex flex-wrap md:ms-5'>
                    <img className='w-full md:w-2/6' src={Doctor1} alt="Doctor1" />
                    <img className='w-full md:w-2/6' src={Doctor2} alt="Doctor2" />
                    <img className='w-full md:w-2/6' src={Doctor3} alt="Doctor3" />
                    <img className='w-full md:w-2/6' src={Doctor4} alt="Doctor4" />
                    <img className='w-full md:w-2/6' src={Doctor5} alt="Doctor5" />
                    <img className='w-full md:w-2/6' src={Doctor6} alt="Doctor6" />
                </div>
            </div>
        </>
    )
}

export default Doctersec