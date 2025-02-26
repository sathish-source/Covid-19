import Faq from './imges/FAQ.png'

const FAQ = () => {

    return (
        <div>
            <div className='d-flex' >
                <h1 className='px-3 col-6'>F.A.Q</h1>
                <img className='col-6 p-5 w-50' src={Faq} />
            </div>
            <h2 className='p-2 display-4 '>#alonetogether</h2>
            <h1 className=' display-1 my-5 ms-3 fw-medium  '>Questions & Answers</h1>
            <div className=' d-flex  '>
            <div className='col-5 '>
                <div className=' text-muted'>
                    <h2 className='my-5 text-black display-5'>What’s open?</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean purus nulla, sagittis a tempus at, feugiat vel lectus. Cras aliquam augue eget lacus euismod, vel mollis est eleifend. Nulla eros justo, sagittis at orci at, commodo condimentum ex.</p>
                </div>
                <div className=' text-muted'>
                    <h2 className='my-5 text-black display-5'>Is it safe to shop at these businesses?</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean purus nulla, sagittis a tempus at, feugiat vel lectus. Cras aliquam augue eget lacus euismod, vel mollis est eleifend. Nulla eros justo, sagittis at orci at, commodo condimentum ex.</p>
                </div>
                <div className=' text-muted'>
                    <h2 className='my-5 text-black display-5'>Are gatherings permitted?</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean purus nulla, sagittis a tempus at, feugiat vel lectus. Cras aliquam augue eget lacus euismod, vel mollis est eleifend. Nulla eros justo, sagittis at orci at, commodo condimentum ex.</p>
                </div>
                <div className=' text-muted'>
                    <h2 className='my-5 text-black display-5'>Can I get child care during the stay home order?</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean purus nulla, sagittis a tempus at, feugiat vel lectus. Cras aliquam augue eget lacus euismod, vel mollis est eleifend. Nulla eros justo, sagittis at orci at, commodo condimentum ex.</p>
                </div>
            </div>
            <div style={{marginLeft:"15rem"}} className=' col-5' >
                <div className=' text-muted'>
                    <h2 className='my-5 text-black display-5'>Can I get a haircut?</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean purus nulla, sagittis a tempus at, feugiat vel lectus. Cras aliquam augue eget lacus euismod, vel mollis est eleifend. Nulla eros justo, sagittis at orci at, commodo condimentum ex.</p>
                </div>
                <div className=' text-muted'>
                    <h2 className='my-5 text-black display-5'>Can the Order be changed?</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean purus nulla, sagittis a tempus at, feugiat vel lectus. Cras aliquam augue eget lacus euismod, vel mollis est eleifend. Nulla eros justo, sagittis at orci at, commodo condimentum ex.</p>
                </div>
                <div className=' text-muted'>
                    <h2 className='my-5 text-black display-5'>Can I engage in political protest gatherings?</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean purus nulla, sagittis a tempus at, feugiat vel lectus. Cras aliquam augue eget lacus euismod, vel mollis est eleifend. Nulla eros justo, sagittis at orci at, commodo condimentum ex.</p>
                </div>
                <div className=' text-muted'>
                    <h2 className='my-5 text-black display-5'>Can I practice my religious faith?</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean purus nulla, sagittis a tempus at, feugiat vel lectus. Cras aliquam augue eget lacus euismod, vel mollis est eleifend. Nulla eros justo, sagittis at orci at, commodo condimentum ex.</p>
                </div>
            </div>
            </div>

        </div>
    )

}

export default FAQ