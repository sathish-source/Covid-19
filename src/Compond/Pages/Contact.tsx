import HeaderIntrosub from "../HeaderIntrosub"
import contactimg from '../../assets/Contacts.png'
import { MdKeyboardArrowRight } from "react-icons/md"
import { useState } from "react"

const Contact = () => {
     const [name,setname] = useState('')
     const [number,setnumber] = useState('')
     const [email,setemail] = useState('')

        const handleSummit =(e:any) => {
            e.preventDefault();
            console.log("Name:",name);
            console.log("Number:",number);
            console.log("Email:",email);
            
        }
    return (
        <>
            <HeaderIntrosub title="Contact" subtitle="#alonetogether" imgs={contactimg} />
            <div className="flex text-center md:text-start my-20 justify-center md:block text-6xl text-gray-900">
                <h1>Get in Touch with Us</h1>
            </div>
            <div className="flex flex-col md:space-x-10 md:flex-row">
                <div className="w-full md:w-1/2 p-5 h-40">
                    <iframe className="w-full h-96" loading="lazy" src="https://maps.google.com/maps?q=London&amp;t=m&amp;z=14&amp;output=embed&amp;iwloc=near" title="London" aria-label="London"></iframe>
                </div>
                <div className="text-center md:text-start md:flex flex-col   mt-[20rem] md:mt-0   text-gray-500 text-lg w-full md:w-1/2">
                    <div>
                        <h6 className="text-gray-900 font-bold my-2">Address</h6>
                        <p>Patricia C. Amedee 4401 <br />
                            Waldeck Street Grapevine <br />
                            Nashville, TX 76051</p>
                    </div>
                    <div>
                        <h6 className="text-gray-900  font-bold my-2">Phone</h6>
                        <p>+99 (0) 101 0000 888</p>
                    </div>
                    <div>
                        <h6 className="text-gray-900 font-bold my-2">Email</h6>
                        <p> info@yourdomain.com</p>
                    </div>
                </div>
            </div>
            <form className="flex my-10 mt-40 md:mt-70 mx-auto flex-col items-center">
                <h1 className="text-6xl mb-10 text-center">Contact Form</h1>
                <div className="flex m-4">
                    <input value={name} onChange={(e) => setname(e.target.value)} className="px-15 py-3 mx-2 bg-gray-200 border-0 rounded" type="text" placeholder="Name" required />
                    <input className="hidden md:block px-15 py-3 mx-2 bg-gray-200 border-0 rounded" type="text" placeholder="*Surname" required />
                </div>
                <div className="flex  m-4">
                    <input value={number} onChange={(e) => setnumber(e.target.value)} className="px-15 py-3 mx-2 bg-gray-200 border-0 rounded" type="number" placeholder="Phone" required />
                    <input  className="hidden md:block px-15 py-3 mx-2 bg-gray-200 border-0 rounded" type="number" placeholder="Phone" required />
                </div>
                <div className="flex  m-4">
                    <input value={email} onChange={(e) => setemail(e.target.value)} className="px-15 py-3 mx-2 bg-gray-200 border-0 rounded" type="email" placeholder="Email Address" required />
                    <input  className="hidden md:block px-15 py-3 mx-2 bg-gray-200 border-0 rounded" type="email" placeholder="Email Address" required />
                </div>
                <div className="flex m-4 ms-6">
                    <textarea className=" rounded w-[20rem] md:w-[40.5rem] p-5 placeholder:text-start bg-gray-200" placeholder="Message"></textarea>
                </div>
                <button onClick={handleSummit}  className="bg-red-700 flex px-8 py-4 text-white text-2xl "><MdKeyboardArrowRight className="h-[2rem] w-[2rem] text-white" />Summit Message</button>
                
            </form>

        </>
    )
}

export default Contact