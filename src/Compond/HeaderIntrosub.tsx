const HeaderIntrosub =(props:any) => {
    return(
        <>
        <section className='headerintro flex flex-col md:flex-row text-center md:text-start md:justify-between'>
            <div className='w-full md:w-1/2 items-center md:items-start flex flex-col justify-between mt-40 '>
                <h1 className='text-7xl md:text-8xl font-bold text-gray-800'>{props.title}</h1>
                <h5 className='text-4xl text-gray-900 pb-3'>{props.subtitle}</h5>
            </div>
            <div className=' w-full md:w-1/2 mt-20' ><img  src={props.imgs} alt="img" /></div>
        </section>
        </>
    )
}

export default HeaderIntrosub 