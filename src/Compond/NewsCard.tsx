

const NewsCard = (props:any) => {
    return (
        <>
            <div className="  w-full h-full mx-auto  rounded object-contain shadow-lg">
                <img className="w-full h-[20rem]" src={props.img} alt="Sunset in the mountains"/>
                    <div className="px-6 py-4">
                        <div className="font-bold text-gray-600 text-xl my-2">November 24, 2020</div>
                        <h1 className="text-gray-800 py-5 text-3xl">
                        Unified Command Center Distributes Personal Protection Equipment to Every County
                        </h1>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <p className='text-xl text-gray-600'>The house opposite commanded a plain view into the room, and observing</p>
                       <h1 className='text-xl w-fit  my-2 border-b-3 border-red-700'>Read More</h1>
                    </div>
            </div>
        </>
    )
}

export default NewsCard