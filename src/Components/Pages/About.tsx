import Spread from '../../assets/Spread.jpg'
import shield from '../../assets/about-bg-01.jpg'
import Image1 from '../../assets/about-bg-03.jpg'
import Image2 from '../../assets/about-bg-04.jpg'
import Image3 from '../../assets/about-bg-05.jpg'
import Image4 from '../../assets/about-bg-06.jpg'
import Image5 from '../../assets/about-bg-07.jpg'
import Image6 from '../../assets/about-bg-09.jpg'
import Symptoms from '../../assets/Symptoms.jpg'

import HeaderIntrosub from "../HeaderIntrosub"

const About = () => {
    return (
        <>
            <HeaderIntrosub title="About Coronavirus" subtitle="#alonetogether"
                imgs={shield} />
            <div className='w-full text-center md:text-start md:w-1/2'>
                <h1 className='text-5xl my-10 mt-50 text-gray-800'>What is coronavirus (COVID-19)?</h1>
                <p className='text-lg text-gray-400'>Coronaviruses are a large family of viruses that cause respiratory <br /> infections. These can range from the common cold to more <br /> serious diseases.</p>
            </div>
            <div className='flex flex-col-reverse  md:flex-row '>
                <div className='py-5 self-center w-4/6 md:w-1/2'>
                    <img className='' src={Spread} alt="spread" />
                </div>
                <div className='text-lg text-center md:text-start text-gray-400'>
                    <h1 className='text-5xl my-10 mt-50 text-gray-800'>How does coronavirus spread?</h1>
                    <p className='p-3'>Because it’s a new illness, we do not know exactly how coronavirus spreads from person to person.</p>
                    <p className='p-3'>Similar viruses are spread in cough droplets.</p>
                    <p className='p-3'>It’s very unlikely it can be spread through things like packages or food.</p>
                </div>
            </div>
            <div className='flex text-center justify-center mt-28' >
                <h1 className='text-6xl text-gray-900'>Take Steps to Protect Yourself</h1>
            </div>
            <div className='container mx-auto flex-col md:flex-row flex justify-center items-center text-center text-gray-500 text-lg '>
                <div className=' flex w-1/ flex-col items-center p-5'>
                    <img className='h-55 m-10' src={Image1} alt="img" />
                    <p>Wash your hands often with soap and <br /> water for at least 20 seconds.</p>
                </div>
                <div className='flex flex-col items-center p-10'>
                    <img className='h-55 m-10' src={Image2} alt="img" />
                    <p >You can also use a hand sanitizer  that<br /> contains at least 60% alchol</p>
                </div>
                <div className='flex flex-col items-center p-5'>
                    <img className='h-55 m-10' src={Image3} alt="img" />
                    <p>Avoid touching your eyes, nose and <br /> mounth with unwashed hands.</p>
                </div>
            </div>
            <div className=' flex flex-col md:flex-row justify-center text-center text-gray-500 text-lg'>
                <div className='flex flex-col items-center p-5'>
                    <img className='h-55 m-10' src={Image4} alt="img" />
                    <p>Avoid close contact with people who are sick</p>
                </div>
                <div className='flex flex-col items-center p-5'>
                    <img className='h-55 m-10' src={Image5} alt="img" />
                    <p>Put distance between yourselfand other  <br /> people</p>
                </div>
            </div>
            <div className='flex flex-col-reverse my-24 text-center md:text-start md:flex-row bg-secondary'>
                <div className='py-5 self-center w-4/6 md:w-1/2'>
                    <img src={Symptoms} alt="" />
                </div>
                <div className='md:w-1/2 flex justify-center '>
                    <div className='flex flex-col p-5 justify-center'>
                        <h1 className='text-6xl text-gray-800  mb-5 border-[#4b4be2]  font-bold'>Symptoms</h1>
                        <p className='pb-5 text-gray-500 text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean purus nulla, sagittis a tempus at, feugiat vel lectus. Cras aliquam augue eget lacus euismod, vel mollis est eleifend. Nulla eros justo, sagittis at orci at, commodo condimentum ex.</p>
                        <img className='w-120' src={Image6} alt="img" />
                    </div>

                </div>
            </div>
        </>
    )
}

export default About