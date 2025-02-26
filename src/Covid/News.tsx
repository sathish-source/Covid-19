import Virus from './imges/Virus.png'
import Card1 from './imges/card-1.jpg'
import Card2 from './imges/Card2.jpg'
import Card3 from './imges/Card3.jpg'
import Card4 from './imges/Card4.jpg'
import Card5 from './imges/Card5.jpg'
import Card6 from './imges/Card6.jpg'


const News = () => {
    return (
        <div>
            <div className='d-flex'>
                <h1 className='px-3 display-1 col-6'>News</h1>
                <img className='col-6 ' src={Virus} alt="Virus" />

            </div>
            <h2 className='p-2 display-4 z-index-1'>#alonetogether</h2>
            <h1 className=' display-2 ms-5 fw-bold text-dark my-5'>Latest News from Coronavirus</h1>
            <div>
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



                <div className='d-flex ms-5' >
                    <div className='sec-last card col-4 text-muted p-3 m-3 '>
                        <img src={Card4} alt="card1" />
                        <p className='p-3 h6'>November 18, 2020</p>
                        <h4 className='text-black p-3'>Unified Command Center Distributes Personal Protection Equipment to Every County</h4>
                        <p className='p-3 h6'>The house opposite commanded a plain view into the room, and observing</p>
                    </div>

                    <div className=' sec-last card col-4 text-muted p-3 m-3'>
                        <img src={Card5} alt="card2" />
                        <p className='p-3 h6'>November 18, 2020</p>
                        <h4 className='text-black p-3'>Unified Command Center Distributes Personal Protection Equipment to Every County</h4>
                        <p className='p-3 h6'>The house opposite commanded a plain view into the room, and observing</p>
                    </div>
                    <div className=' sec-last card col-4 text-muted p-3 m-3'>
                        <img src={Card6} alt="card3" />
                        <p className='p-3 h6'>November 18, 2020</p>
                        <h4 className='text-black p-3'>Unified Command Center Distributes Personal Protection Equipment to Every County</h4>
                        <p className='p-3 h6'>The house opposite commanded a plain view into the room, and observing</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News