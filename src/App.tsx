import { BrowserRouter,  Route, Routes,  } from 'react-router-dom'
import './App.css'
import CovidHome from './Covid/Covidhome';
import Covid from './Covid/covid';
import Nav from './Covid/Nav';
import Contact from './Covid/Contact';

function App() {


  return (
    <div className="app">


      <BrowserRouter>
          <Nav/>
          <Routes>
          <Route path='/' element={<Covid/> }/>
          <Route path='/Home' element={ < CovidHome/> }/>
          <Route path='/Contact' element={<Contact/>}/>
          </Routes>
      </BrowserRouter>

    </div>

  )
}
export default App;
