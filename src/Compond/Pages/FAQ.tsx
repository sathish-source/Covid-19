import HeaderIntrosub from "../HeaderIntrosub"
import Faq from '../../assets/FAQ.png'


const FAQ = () => {
    return (
        <>
            <HeaderIntrosub title="F.A.Q" subtitle="#alonetogether"
                imgs={Faq} />
            <div className="my-20 text-center md:text-start mt-40">
                <h1 className="playfair-display text-gray-800 text-6xl">Questions & Answers</h1>
            </div>
            <div className="flex flex-col md:flex-row text-center md:text-start md:justify-between">
            <div className='w-full md:w-3/8 p-4 text-[20px] text-gray-500'>
                <div >
                    <h2 className='my-16 font-bold text-gray-700 text-3xl'>What’s open?</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean purus nulla, sagittis a tempus at, feugiat vel lectus. Cras aliquam augue eget lacus euismod, vel mollis est eleifend. Nulla eros justo, sagittis at orci at, commodo condimentum ex.</p>
                </div>
                <div>
                    <h2 className='my-16 font-bold text-gray-700 text-3xl'>Is it safe to shop at these businesses?</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean purus nulla, sagittis a tempus at, feugiat vel lectus. Cras aliquam augue eget lacus euismod, vel mollis est eleifend. Nulla eros justo, sagittis at orci at, commodo condimentum ex.</p>
                </div>
                <div >
                    <h2 className='my-16 font-bold text-gray-700 text-3xl'>Are gatherings permitted?</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean purus nulla, sagittis a tempus at, feugiat vel lectus. Cras aliquam augue eget lacus euismod, vel mollis est eleifend. Nulla eros justo, sagittis at orci at, commodo condimentum ex.</p>
                </div>
                <div>
                    <h2 className='my-16 font-bold text-gray-700 text-3xl'>Can I get child care during the stay home order?</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean purus nulla, sagittis a tempus at, feugiat vel lectus. Cras aliquam augue eget lacus euismod, vel mollis est eleifend. Nulla eros justo, sagittis at orci at, commodo condimentum ex.</p>
                </div>
            </div>
            <div className='w-full md:w-3/8 p-4 text-[20px] text-gray-500' >
                <div >
                    <h2 className='my-16 font-bold text-gray-700 text-3xl'>Can I get a haircut?</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean purus nulla, sagittis a tempus at, feugiat vel lectus. Cras aliquam augue eget lacus euismod, vel mollis est eleifend. Nulla eros justo, sagittis at orci at, commodo condimentum ex.</p>
                </div>
                <div >
                    <h2 className='my-16 font-bold text-gray-700 text-3xl'>Can the Order be changed?</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean purus nulla, sagittis a tempus at, feugiat vel lectus. Cras aliquam augue eget lacus euismod, vel mollis est eleifend. Nulla eros justo, sagittis at orci at, commodo condimentum ex.</p>
                </div>
                <div>
                    <h2 className='my-16 font-bold text-gray-700 text-3xl'>Can I engage in political protest gatherings?</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean purus nulla, sagittis a tempus at, feugiat vel lectus. Cras aliquam augue eget lacus euismod, vel mollis est eleifend. Nulla eros justo, sagittis at orci at, commodo condimentum ex.</p>
                </div>
                <div >
                    <h2 className='my-16 font-bold text-gray-700 text-3xl'>Can I practice my religious faith?</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean purus nulla, sagittis a tempus at, feugiat vel lectus. Cras aliquam augue eget lacus euismod, vel mollis est eleifend. Nulla eros justo, sagittis at orci at, commodo condimentum ex.</p>
                </div>
            </div>
            </div>
        </>
    )
}

export default FAQ