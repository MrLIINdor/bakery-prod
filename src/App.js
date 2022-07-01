import React  from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Heder from './components/Heder/Heder'
import  Home  from './pages/home'
import  About  from './pages/about'
import  Contact  from './pages/contact'
import 'bootstrap/dist/css/bootstrap.min.css';
// import Futer from './components/Futer/Futer'



function App() {
  return (
    <BrowserRouter>
      <Heder/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      {/* <Futer/> */}
  </BrowserRouter>
  )
}

export default App;
