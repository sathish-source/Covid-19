import { BrowserRouter,  Route, Routes,  } from 'react-router-dom'
import './App.css'
import CovidHome from './Covid/Covidhome';
import About from './Covid/About';
import Nav from './Covid/Nav';
import Contact from './Covid/Contact';
import Footer from './Covid/Footer';
import FAQ from './Covid/FAQ';
import General from './Covid/GeneralInformation';
import News from './Covid/News';

function App() {


  return (
    <div className="app">


      <BrowserRouter>
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

    </div>

  )
}
export default App;
