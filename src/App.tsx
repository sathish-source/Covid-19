import './App.css'
import Footer from './Compond/Footer';
import About from './Compond/Pages/About';
import Contact from './Compond/Pages/Contact';
import Home from './Compond/Pages/Home';
import Navbar from './Compond/Navbar';

import { BrowserRouter,  Route, Routes,  } from 'react-router-dom'
import FAQ from './Compond/Pages/FAQ';
import GenaralInfo from './Compond/Pages/GenaralInfo';
import News from './Compond/Pages/News';
// import Nav from './Componants/Navbar/Nav';
// import CovidHome from './Componants/Home/Covidhome';
// import About from './Componants/About/About'
// import Contact from './Componants/Contact';
// import Footer from './Componants/Footer/Footer';
// import FAQ from './Componants/FAQ';
// import General from './Componants/GeneralInformation';
// import News from './Componants/News';

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
     


      {/* <BrowserRouter>
          <Nav/>
          <Routes>
          <Route path='/' element={ < CovidHome/> }/>
          <Route path='/About' element={<About/> }/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/FAQ' element={<FAQ/>}/>
          <Route path='/GeneralInformation' element={<General/>}/>
          <Route path='/News' element={<News/>}/>
          </Routes>
          <Footer/>
      </BrowserRouter>
      */}

    </div>

  )
}
export default App;
