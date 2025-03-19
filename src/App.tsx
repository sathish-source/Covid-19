import './App.css'
import Footer from './Components/Footer';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import Home from './Components/Pages/Home';
import Navbar from './Components/Navbar';
import { BrowserRouter,  Route, Routes,  } from 'react-router-dom'
import FAQ from './Components/Pages/FAQ';
import GenaralInfo from './Components/Pages/GenaralInfo';
import News from './Components/Pages/News';


function App() {
  return (
    <div className="app">
      <BrowserRouter>
       <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/FAQ" element={<FAQ/>}/>
        <Route path="/GeneralInformation" element={<GenaralInfo/>}/>
        <Route path="/News" element={<News/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>

  )
}
export default App;
