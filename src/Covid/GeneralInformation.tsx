import Genaral from './imges/General.png'
import Understand from './imges/Understanding the Risks.jpg'
import SocialDistancing from './imges/Social-Distancing.jpg'
import workfromhome from './imges/Work From Home If You Can.jpg'

const General = () => {
    return (
        <div>
            <div className='d-flex'>
                <h1 className='px-3 display-1 col-6'>Stay at Home <br /> and Stay Safe</h1>
                <img className='col-6 ' src={Genaral} alt="" />

            </div>
            <h2 className='p-2 display-4 z-index-1'>#alonetogether</h2>

            <div className=' my-5'>
                <div style={{ margin: "10rem 0" }} className='col-6 fs-4 align-content-center text-muted '>
                    <h1 className='text-dark my-5 '>Helping You and Your Family Stay Safe</h1>
                    <p>There have been changes to the law which mean you can spend more time with your family and friends. There are no time limits for exercise or leisure activities and you can now go shopping for non-essential items. Meeting friends and family is a really important way of helping to look after our mental wellbeing and keeping in touch.</p>
                </div>
            </div>
            <div style={{ margin: "10rem 0" }} className=' d-flex  align-content-center my-5'>
                <div>
                    <img className='w-75' src={Understand} alt="Spread" />
                </div>
                <div className='col-6 fs-4 align-content-center text-muted'>
                    <h1 className='text-dark mb-4'>Understanding the Risks</h1>
                    <p>It’s important to understand that even when people appear not to have symptoms of coronavirus (COVID-19), they may still be carrying the virus. Where you’re meeting people who aren’t from your household, your risk of catching coronavirus can increase depending on the situation.
                        <br />
                        <br />

                        The European Centre for Disease Control talks about high risk and low risk contacts with other people. You should take these risks into account when you are thinking about visiting or gathering with other people.</p>
                </div>
            </div>

            <div style={{ margin: "10rem 0" }} className=' d-flex  align-content-center  my-lg-5'>
                <div className='col-5  align-content-center text-muted'>
                    <h1 className='text-dark mb-4' >Social Distancing</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean purus nulla, sagittis a tempus at, feugiat vel lectus. Cras aliquam augue eget lacus euismod, vel mollis est eleifend. Nulla eros justo, sagittis at orci at, commodo condimentum ex.</p>
                </div>
                <div className='p-4' >
                    <img className='w-75 ms-5' src={SocialDistancing} alt="social" />
                </div>
            </div>



            <div style={{ margin: "10rem 0" }} className=' d-flex  align-content-center my-5'>
                <div>
                    <img src={workfromhome} alt="Spread" />
                </div>
                <div className='col-5 ms-5 fs-4 align-content-center text-muted'>
                    <h1 className='text-dark mb-4'>Work From Home If You Can</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean purus nulla, sagittis a tempus at, feugiat vel lectus. Cras aliquam augue eget lacus euismod, vel mollis est eleifend. Nulla eros justo, sagittis at orci at, commodo condimentum ex.</p>
                </div>
            </div>
        </div>

    )
}

export default General