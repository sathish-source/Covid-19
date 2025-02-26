import contImage from './imges/Contacts.png'
import GoogleMap from './imges/GoogleMap.png'

const Contact = () => {
    return (
        <div>
            <div className="d-flex">
                <h1 className='px-3 display-1 col-4'>Contact</h1>
                <img className='col-8' src={contImage} />
            </div>
            <h3 className='p-2 display-4 z-index-1'>#alonetogether</h3>
            <h1 style={{ margin: "10rem 0 6rem 0", fontWeight: "normal" }} className='display-1'>Get in Touch with Us</h1>
            <div className='d-flex'>
                <div>
                    <img style={{ width: '50rem' }} src={GoogleMap} alt="map" />
                </div>
                <div className='justify-content-center ms-5 col-5 text-muted'>


                    <div>
                        <h4 className='text-black'>Address</h4>
                        <p>
                            Patricia C. Amedee 4401
                            Waldeck Street Grapevine
                            Nashville, TX 76051
                        </p>
                    </div>
                    <div>
                        <h4 className='text-black'>Phone</h4>
                        <p> +99 (0) 101 0000 888 </p>
                    </div>
                    <div>
                        <h4 className='text-black'>Email</h4>
                        <p>info@yourdomain.com</p>
                    </div>
                </div>


            </div>
                <div style={{marginTop: "10rem"}} className='d-flex justify-content-center text-center'>
                    <form>
                    <h1 className='display-1 m-5'>Contact From</h1>
                    <div className='d-flex' >
                        <input className=' m-3 p-3 w-50 ' type="text" placeholder='Name'  required/>
                        <input className=' m-3 p-3 w-50 ' type="text" placeholder='Surname*'  required/>
                    </div>
                    <div  className='d-flex' >
                        <input className='p-3 m-3 w-50' type="text" placeholder='Phone' required />
                        <input className='p-3 m-3 w-50' type="text" placeholder='Phone' required />
                    </div >
                    <div  className='d-flex' >
                        <input className='p-3 m-3 w-50 placeholder-wave' type="Email" placeholder='Email' required />
                        <input className='p-3 m-3 w-50' type="Email" placeholder='Email' required />
                    </div>
                    <textarea  style={{width:"55rem", height:"8rem"}} className='p-2 m-3' placeholder='Message' ></textarea><br />
                    <button  className= " callBack m-5 " type='submit'>
                        Summit Message
                    </button>
                    </form>
                </div>
        </div>
    )

}
export default Contact