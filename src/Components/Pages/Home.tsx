import HeaderIntro from "../HeaderIntro"
import Homesec2 from "../Homesec2"
import Leftdesc from "../LeftDesc"
import Rightdesc from "../Rightdesc"
import travals from '../../assets/Travals.jpg'
import social from '../../assets/Social-Distense.jpg'
import Symptoms from '../../assets/Symptoms.jpg'
import Doctersec from "../Doctersec"
import Callback from "../Callback"
import NewsCard from "../NewsCard"
import Card1 from '../../assets/card-1.jpg'
import Card2 from '../../assets/Card2.jpg'
import Card3 from '../../assets/Card3.jpg'
import homebg from '../../assets/home-bg-01.png'


const Home = () => {
    return (
        <>
           
            <HeaderIntro title="Stay Home  Saves Lives." subtitle="#alonetogether" imgs={homebg} />
            <Homesec2 />
            <Leftdesc title="Travel Advice"
             subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean purus nulla, sagittis a tempus at, feugiat vel lectus. Cras aliquam augue eget lacus euismod, vel mollis est eleifend. Nulla eros justo, sagittis at orci at, commodo condimentum ex." 
             imgUrl={travals} 
             ReadMore="Read More" />
            <Rightdesc title="Social Distancing" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean purus nulla, sagittis a tempus at, feugiat vel lectus. Cras aliquam augue eget lacus euismod, vel mollis est eleifend. Nulla eros justo, sagittis at orci at, commodo condimentum ex." imgUrl={social} ReadMore="Read More"  />
            <Leftdesc title="Symptoms"
             subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean purus nulla, sagittis a tempus at, feugiat vel lectus. Cras aliquam augue eget lacus euismod, vel mollis est eleifend. Nulla eros justo, sagittis at orci at, commodo condimentum ex." 
             imgUrl={Symptoms}
             ReadMore="Read More" />
             <Doctersec/>
             <Callback/>
             <div className="flex my-10 flex-col justify-center text-center md:flex-row md:text-start md:justify-between">
                <h1 className="text-7xl">News</h1>
                <h5 className="text-3xl">Go to page</h5>
             </div>
             <div className=" grid grid-cols-1 mb-30 md:grid-cols-2 lg:grid-cols-3 p-3 gap-3">
                <NewsCard img={Card1}/>
                <NewsCard img={Card2}/>
                <NewsCard img={Card3}/>
             </div>
        </>
    )
}

export default Home