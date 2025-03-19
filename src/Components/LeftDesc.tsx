

const Leftdesc = (props:any) => {
    return (
        <>
            <section  className='flex flex-col-reverse my-24 text-center md:text-start md:flex-row bg-secondary'>
                <div className='py-5 self-center w-4/6 md:w-1/2'>
                    <img src={props.imgUrl} alt="" />
                </div>
                <div className='md:w-1/2 flex justify-center '>
                <div className='flex flex-col p-5 justify-center'>
                    <h1 className='text-6xl text-gray-800  mb-5 border-[#4b4be2]  font-bold'>{props.title}</h1>
                    <p className='pb-5 text-gray-500 text-xl'>{props.subtitle} </p>
                    <p  className='pb-5 text-gray-500 text-xl'>{props.subtitle2}</p>
                    <a className='link  font-bold text-2xl  border-red-600' href="#">{props.ReadMore}</a>
                </div>

                </div>
            </section>
        </>
    )
}

export default Leftdesc