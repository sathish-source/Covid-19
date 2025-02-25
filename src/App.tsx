import { BrowserRouter,  Route, Routes,  } from 'react-router-dom'
import './App.css'
import CovidHome from './Covid/Covidhome';
import About from './Covid/About';
import Nav from './Covid/Nav';
import Contact from './Covid/Contact';
import Footer from './Covid/Footer';

function App() {


  return (
    <div className="app">


      <BrowserRouter>
          <Nav/>
          <Routes>
          <Route path='/' element={<About/> }/>
          <Route path='/Home' element={ < CovidHome/> }/>
          <Route path='/Contact' element={<Contact/>}/>
          </Routes>
          <Footer/>
      </BrowserRouter>

    </div>

  )
}
export default App;
