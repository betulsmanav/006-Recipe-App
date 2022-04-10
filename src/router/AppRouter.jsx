
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from '../pages/about/About';
import Home from '../pages/home/Home';
import Navbar from '../components/navbar/Navbar';
import Login from '../pages/login/Login'
import Footer from '../components/footer/Footer'
import Details from '../pages/details/Details'



const AppRouter = () => {
    return (
        <div>


            <BrowserRouter>
                <Navbar />
                
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/details' element={<Details />} />
                </Routes>

                <Footer />


            </BrowserRouter>
        </div>
    )
}

export default AppRouter