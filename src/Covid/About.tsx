
import shield from './imges/about-bg-01.jpg'
import Image3 from './imges/about-bg-03.jpg'
import Image4 from './imges/about-bg-04.jpg'
import Image5 from './imges/about-bg-05.jpg'
import Image6 from './imges/about-bg-06.jpg'
import Image7 from './imges/about-bg-07.jpg'
import Image9 from './imges/about-bg-09.jpg'
import Spread from './imges/Spread.jpg'
import Symptoms from './imges/Symptoms.jpg'

const Covid = () => {

    return (
        <div>

            <div className='d-flex'>
                <h1 className='px-3 display-1 col-6'>About Coronavirus</h1>
                <img className='col-6 p-5' src={shield} alt="" />

            </div>
            <h2 className='p-2 display-4 z-index-1'>#alonetogether</h2>

            <div className=' my-5'>
                <div style={{margin:"10rem 0"}} className='col-6 fs-3 align-content-center text-muted '>
                    <h1 className='text-dark mb-4 '>What is coronavirus (COVID-19)?</h1>
                    <p>Coronaviruses are a large family of viruses that cause respiratory infections. These can range from the common cold to more serious diseases.</p>
                </div>

                <div className=' d-flex  align-content-center my-5'>
                    <div>
                        <img className='p-3' src={Spread} alt="Spread" />
                    </div>
                    <div className='col-5  align-content-center text-muted'>
                        <h1 className='text-dark mb-4'>How does coronavirus spread?</h1>
                        <p>Because it,s a new illness, we do not know exactly how coronavirus spreads from person to person.

                            Similar viruses are spread in cough droplets.

                            Its very unlikely it can be spread through things like packages or food.</p>
                    </div>
                </div>
                <div style={{margin:"10rem 0"}}>
                    <h1 className='text-dark mb-4 display-1 d-flex justify-content-center'>Take Steps to Protect Yourself</h1>
                    <div className='d-flex  justify-content-center mt-5 fs-3 text-center' >
                        <div className='col-3 p-3'>
                            <img src={Image3} alt="" />
                            <p>Wash your hands often with soap and water for at least 20 seconds.</p>
                        </div>

                        <div className='col-3 p-3 mt-2'>
                            <img src={Image4} alt="" />
                            <p>You can also use a hand sanitizer that contains at least 60% alchol</p>
                        </div>

                        <div className='col-3 p-3'>
                            <img src={Image5} alt="" />
                            <p>Avoid touching your eyes, nose and mounth with unwashed hands.</p>
                        </div>
                    </div>

                    <div className='d-flex  justify-content-center mt-5 fs-3 text-center' >
                        <div className='col-3 p-3'>
                            <img src={Image6} alt="" />
                            <p>Avoid close contact with people who are sick</p>
                        </div>

                        <div className='col-3 p-3 mt-2'>
                            <img src={Image7} alt="" />
                            <p>Put distance between yourself and other people</p>
                        </div>

                    </div>


                </div>

            </div>

            <div className=' d-flex  align-content-center my-5' >
                <div>
                    <img className='p-3' src={Symptoms} alt="" />
                </div>
                <div className='col-5  align-content-center text-muted'>
                    <h1 className='text-dark mb-4 my-5'>Symptoms</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean purus nulla, sagittis a tempus at, feugiat vel lectus. Cras aliquam augue eget lacus euismod, vel mollis est eleifend. Nulla eros justo, sagittis at orci at, commodo condimentum ex.</p>
                    <img src={Image9} alt="" />

                </div>
            </div>

        </div>


    )

}

export default Covid