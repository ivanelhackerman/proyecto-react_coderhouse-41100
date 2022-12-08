import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from "../CartWidget/CartWidget"
import logo from "../../assets/images/logo.svg"
import lightMode from "../../assets/images/light-mode.svg"
import darkMode from "../../assets/images/dark-mode.svg"
import NavCategories from "./Categories/NavCategories"
import Sidebar from './Sidebar/Sidebar'

const Navbar = () => {
let ubicacionPrincipal = window.scrollY
    window.onscroll = function() {
        let desplazamientoActual = window.scrollY
        if(ubicacionPrincipal >= desplazamientoActual) {
            document.getElementById('navbar').classList.add('top-0')
            document.getElementById('navbar').classList.remove('-top-20')
        } else {
            document.getElementById('navbar').classList.remove('top-0')
            document.getElementById('navbar').classList.add('-top-20')
        }
        ubicacionPrincipal = desplazamientoActual
    }
return (
    <>
        <nav id='navbar' className="bg-white fixed top-0 left-0 w-full border-b border-b-light-gray text-base text-dark-blue transition-all duration-300 z-20">
            <div className="md-max:items-center md-max:bg-white md-max:flex md-max:h-20 md-max:justify-between md-max:py-0 md-max:px-6 md-max:w-full lg-min:hidden">
                <Sidebar/>
                <Link to="/">
                    <picture className="mt-1 inline-block overflow-hidden relative">
                        <img src={logo} alt="logo"/>
                    </picture>
                </Link>
                <ul className="flex items-center flex-wrap">
                    <li className="h-20 flex items-center">
                        <div className="overflow-hidden inline-block relative cursor-pointer">
                            <img className="hidden" src={lightMode} alt="lightMode"/>
                            <img src={darkMode} alt="lightMode"/>
                        </div>
                    </li>
                    <li className="border-l border-l-light-gray ml-4 pl-4">
                        <CartWidget/>
                    </li>
                </ul>
            </div>
            <ul className="flex items-center flex-wrap justify-between px-10 min-h-[80px] md-max:hidden">
                <li className="list-item">
                    <div className="flex items-center flex-wrap">
                        <Link to='/' className="mt-1 mr-8 inline-block overflow-hidden relative">
                            <img src={logo} alt="logo"/>
                        </Link>
                        <NavCategories
                            titulo ="Realidad Virtual"
                            ruta ="/category/1"
                        />
                        <NavCategories
                            titulo ="Videollamadas"
                            ruta ="/category/2"
                        />
                        <NavCategories
                            titulo ="Lentes inteligentes"
                            ruta ="/category/3"
                        />
                    </div>
                </li>
                <li className="list-item">
                    <ul className="flex items-center flex-wrap">
                        <li className="h-20 pl-6 flex items-center">
                            <div className="overflow-hidden inline-block relative cursor-pointer">
                                <img className="hidden" src={lightMode} alt="lightMode"/>
                                <img src={darkMode} alt="lightMode"/>
                            </div>
                        </li>
                        <li className="border-l border-l-light-gray ml-4 pl-4">
                            <CartWidget/>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    </>
)
}

export default Navbar