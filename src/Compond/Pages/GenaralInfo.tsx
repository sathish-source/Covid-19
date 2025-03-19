import Genaral from '../../assets/General.png'
import HeaderIntrosub from '../HeaderIntrosub'
import LeftDesc from '../LeftDesc'
import Understand from '../../assets/Understanding the Risks.jpg'
import Rightdesc from '../Rightdesc'
import SocialDistancing from '../../assets/Social-Distancing.jpg'
import workfromhome from '../../assets/Work From Home If You Can.jpg'




const GenaralInfo = () => {
    return(
        <>
        <HeaderIntrosub title="Stay at Home and Stay Safe" subtitle="#alonetogether" imgs={Genaral} />
        <div className='w-full text-center md:text-start md:w-1/2 p-3 my-30  text-gray-500 text-[20px]'>
            <h1 className='text-6xl my-10 text-gray-800'>Helping You and Your Family Stay Safe</h1>
            <p>There have been changes to the law which mean you can spend more time with your family and friends. There are no time limits for exercise or leisure activities and you can now go shopping for non-essential items. Meeting friends and family is a really important way of helping to look after our mental wellbeing and keeping in touch.</p>
        </div>
        <LeftDesc title="Understanding the Risks" subtitle="It’s important to understand that even when people appear not to have symptoms of coronavirus (COVID-19), they may still be carrying the virus. Where you’re meeting people who aren’t from your household, your risk of catching coronavirus can increase depending on the situation." subtitle2=" The European Centre for Disease Control talks about high risk and low risk contacts with other people. You should take these risks into account when you are thinking about visiting or gathering with other people." imgUrl={Understand} />
        <Rightdesc title="Social Distancing Guidance" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean purus nulla, sagittis a tempus at, feugiat vel lectus. Cras aliquam augue eget lacus euismod, vel mollis est eleifend. Nulla eros justo, sagittis at orci at, commodo condimentum ex." imgUrl={SocialDistancing}/>
        <LeftDesc title="Work From Home If You Can" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean purus nulla, sagittis a tempus at, feugiat vel lectus. Cras aliquam augue eget lacus euismod, vel mollis est eleifend. Nulla eros justo, sagittis at orci at, commodo condimentum ex." imgUrl={workfromhome} />
        </>
    )
}

export default GenaralInfo