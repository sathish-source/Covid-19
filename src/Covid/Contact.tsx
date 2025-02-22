import contImage from './Contacts.png'

const Contact = () => {
    return (
        <div>
            <div className="d-flex">
                <h1 className='px-3 display-1 '>Contact</h1>
            </div>
                <img className='col-12' src={contImage} />
                <h3 className='display-2'>#alonetogether</h3>
            <div>
                <h4>
                    Address
                    Patricia C. Amedee 4401
                    Waldeck Street Grapevine
                    Nashville, TX 76051
                </h4>
                <h4>
                    Phone
                    +99 (0) 101 0000 888
                </h4>
                <h4>
                    Email
                    info@yourdomain.com
                </h4>

            </div>
        </div>
    )

}
export default Contact