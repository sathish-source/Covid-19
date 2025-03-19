import HeaderIntrosub from "../HeaderIntrosub"
import Virus from '../../assets/Virus.png'
import NewsCard from "../NewsCard"
import Card1 from '../../assets/card-1.jpg'
import Card2 from '../../assets/Card2.jpg'
import Card3 from '../../assets/Card3.jpg'
import Card4 from '../../assets/Card4.jpg'
import Card5 from '../../assets/Card5.jpg'
import Card6 from '../../assets/Card6.jpg'


const News = () => {
    return(
        <>
        <HeaderIntrosub title="News" subtitle="#alonetogether" imgs={Virus}/>
        <div className="text-center my-40 md:text-start">
            <h1 className="text-7xl text-gray-800">Latest News from Coronavirus</h1>
        </div>
        <div className=" grid mb-30 gap-y-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-3 gap-3">
                <NewsCard img={Card1}/>
                <NewsCard img={Card2}/>
                <NewsCard img={Card3}/>
                <NewsCard img={Card4}/>
                <NewsCard img={Card5}/>
                <NewsCard img={Card6}/>
             </div>
        </>
    )
}

export default News