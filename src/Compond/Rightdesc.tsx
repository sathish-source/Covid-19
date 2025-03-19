

const Rightdesc = (prop:any) => {
    return (
        <>
            <section  className='flex flex-col my-24 text-center md:text-start md:flex-row bg-secondary'>
               
                <div className='md:w-1/2 flex justify-center '>
                <div className='flex flex-col p-5 justify-center'>
                    <h1 className='text-6xl text-gray-800  mb-5 border-[#4b4be2]  font-bold'>{prop.title}</h1>
                    <p className='pb-5 text-gray-500 text-xl'>{prop.subtitle}</p>
                    <a className='link font-bold text-2xl  border-red-600' href="#">{prop.ReadMore}</a>
                </div>
                </div>
                <div className='py-5 self-center w-4/6 md:w-1/2'>
                    <img src={prop.imgUrl} alt="img" />
                </div>
            </section>
        </>
    )
}

export default Rightdesc