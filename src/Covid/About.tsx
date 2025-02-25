
import shield from './imges/about-bg-01.jpg'
import Image3 from './imges/about-bg-03.jpg'
import Image4 from './imges/about-bg-04.jpg'
import Image5 from './imges/about-bg-05.jpg'
import Image6 from './imges/about-bg-06.jpg'
import Image7 from './imges/about-bg-07.jpg'
import Image9 from './imges/about-bg-09.jpg'

const Covid = () => {

    return (
        <div>
          
            <div className='d-flex'>
                <h1 className='px-3 display-1 col-6'>About Coronavirus</h1>
                <img className='col-6' src={shield} alt="" />

            </div>
                <h2 className='display-2'>#alonetogether</h2>

            <div className='container'>
                <div>
                    <h1>What is coronavirus (COVID-19)?</h1>
                    <p>Coronaviruses are a large family of viruses that cause respiratory infections. These can range from the common cold to more serious diseases.</p>
                    <img src="" alt="" />
                </div>

                <div>
                    <h1>How does coronavirus spread?</h1>
                    <p>Because it,s a new illness, we do not know exactly how coronavirus spreads from person to person.

                        Similar viruses are spread in cough droplets.

                        Its very unlikely it can be spread through things like packages or food.</p>
                    <img src="" alt="" />
                </div>
                <div className='d-flex-wrap'>
                    <h1>Take Steps to Protect Yourself</h1>
                    <div>
                    <img src={Image3} alt="" />
                    <p>Wash your hands often with soap and water for at least 20 seconds.</p>
                    </div>

                    <div>
                    <img  src={Image4} alt="" />
                    <p>You can also use a hand sanitizer that contains at least 60% alchol</p>
                    </div>

                    <div>
                    <img  src={Image5}  alt="" />
                    <p>Avoid touching your eyes, nose and mounth with unwashed hands.</p>
                    </div>

                    <div>
                    <img  src={Image6}  alt="" />
                    <p>Avoid close contact with people who are sick</p>
                    </div>

                    <div>
                    <img  src={Image7}  alt="" />
                    <p>Put distance between yourself and other people</p>
                    </div>

                </div>

            </div>
            
            <div>
                <h1 className='h1'>Symptoms</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean purus nulla, sagittis a tempus at, feugiat vel lectus. Cras aliquam augue eget lacus euismod, vel mollis est eleifend. Nulla eros justo, sagittis at orci at, commodo condimentum ex.</p>
                <img className='d-flex justify-content-center' src={Image9}  alt="" />
            </div>

        </div>


    )

}

export default Covid