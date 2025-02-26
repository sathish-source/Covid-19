import './Home.css'
import travals from './imges/Travals.jpg'
import homebg from './imges/home-bg-01.png'
import social from './imges/Social-Distense.jpg'
import Symptoms from './imges/Symptoms.jpg'
import Doctor1 from './imges/Docter1.jpg'
import Doctor2 from './imges/Docter2.jpg'
import Doctor3 from './imges/Docter3.jpg'
import Doctor4 from './imges/Docter4.jpg'
import Doctor5 from './imges/Docter5.jpg'
import Doctor6 from './imges/Docter6.jpg'
import CallBack from './imges/callback.jpg'
import Card1 from './imges/card-1.jpg'
import Card2 from './imges/Card2.jpg'
import Card3 from './imges/Card3.jpg'



const CovidHome = () => {
    return (
        <div>
            <div >
                <div className='d-flex' >
                    <h1 className='px-3 col-6'>Stay Home <br /> Saves Lives.</h1>
                    <img className='col-6 w-50' src={homebg} />
                </div>
                <h2 className='p-2 display-4 '>#alonetogether</h2>

                <div className='d-flex p-5 bg-primary  justify-content-evenly align-items-center text-white mb-5'>
                    <h1 className='display-2'>The Last Situation</h1>

                    <div className=' h3 p-4'>
                        <h2>178,196</h2>
                        <p>People Tested</p>
                    </div>

                    <div className=' h3 p-4' >
                        <h2>26,098</h2>
                        <p>Cases</p>
                    </div>

                    <div className=' h3 p-4' >
                        <h2>4,333</h2>
                        <p>Hospitalized</p>
                    </div>
                </div>

                <div className=' d-flex  align-content-center my-5'>
                    <div>
                        <img src={travals} alt="travals" />
                    </div>
                    <div className='col-5  align-content-center text-muted'>
                        <h1 className='text-dark mb-4'>Travel Advice</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean purus nulla, sagittis a tempus at, feugiat vel lectus. Cras aliquam augue eget lacus euismod, vel mollis est eleifend. Nulla eros justo, sagittis at orci at, commodo condimentum ex.</p>

                    </div>
                </div>

                <div className=' d-flex  align-content-center p-5 my-lg-5'>
                    <div className='col-5  align-content-center text-muted'>
                        <h1 className='text-dark mb-4' >Social Distancing</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean purus nulla, sagittis a tempus at, feugiat vel lectus. Cras aliquam augue eget lacus euismod, vel mollis est eleifend. Nulla eros justo, sagittis at orci at, commodo condimentum ex.</p>
                    </div>
                    <div className='p-4' >
                        <img src={social} alt="social" />
                    </div>
                </div>

                <div className=' d-flex  align-content-center my-5'>
                    <div>
                        <img src={Symptoms} alt="Symptoms" />
                    </div>
                    <div className='col-5  align-content-center text-muted' >
                        <h1 className='text-dark mb-4' >Symptoms</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean purus nulla, sagittis a tempus at, feugiat vel lectus. Cras aliquam augue eget lacus euismod, vel mollis est eleifend. Nulla eros justo, sagittis at orci at, commodo condimentum ex.</p>
                    </div>
                </div>
                <div className='d-flex '>
                    <div className='sec-3 col-4 me-5'>
                        <h1 className='sub-sec-1 col-4 text-white text-align-center'>Doctors Working Hard for Cure</h1>
                    </div>
                    <div className='sub3-sec-2 ms-5'>
                        <img src={Doctor1} alt="Doctor1" />
                        <img src={Doctor2} alt="Doctor2" />
                        <img src={Doctor3} alt="Doctor3" />
                        <img src={Doctor4} alt="Doctor4" />
                        <img src={Doctor5} alt="Doctor5" />
                        <img src={Doctor6} alt="Doctor6" />
                    </div>
                </div>
                <div className='sec-4  p-5 d-flex justify-content-between'>
                    <div>
                    <h1 className='mb-5'>Become a volunteer or <br/> health care worker staffer.</h1>
                    <input id='input'placeholder='Enter the Number' className='p-4' type="text" required />
                    <a className="sec-4-btn ms-4 h4 px-5 text-white"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
                            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                        </svg>CallBack
                    </a>
                    </div>
                    <div  className='align-self-center'>
                    <img src={CallBack} alt="CallBack"  />
                    </div>
                </div>
                    <h1 className='ms-5 p-3'>News</h1>
                <div className='d-flex ms-5' >
                    <div className='sec-last card col-4 text-muted p-3 m-3 '>
                        <img src={Card1} alt="card1" />
                        <p className='p-3 h6'>November 24, 2020</p>
                        <h4 className='text-black p-3'>Unified Command Center Distributes Personal Protection Equipment to Every County</h4>
                        <p className='p-3 h6'>The house opposite commanded a plain view into the room, and observing</p>
                    </div>
                    
                    <div className=' sec-last card col-4 text-muted p-3 m-3'>
                        <img src={Card2} alt="card2" />
                        <p className='p-3 h6'>November 24, 2020</p>
                        <h4 className='text-black p-3'>Unified Command Center Distributes Personal Protection Equipment to Every County</h4>
                        <p className='p-3 h6'>The house opposite commanded a plain view into the room, and observing</p>
                    </div>
                    <div className=' sec-last card col-4 text-muted p-3 m-3'>
                        <img src={Card3} alt="card3" />
                        <p className='p-3 h6'>November 24, 2020</p>
                        <h4 className='text-black p-3'>Unified Command Center Distributes Personal Protection Equipment to Every County</h4>
                        <p className='p-3 h6'>The house opposite commanded a plain view into the room, and observing</p>
                    </div>

                </div>
            </div>
        </div>
    )

}

export default CovidHome