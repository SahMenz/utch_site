import React, { useEffect, useState } from "react";
import './css/navigation.css'
import logo from '../../assets/logo/logo1.png'
import { navLinks } from "./navAux";
import { useLocation } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";



export default function Navigation(){
    const pathname = useLocation().pathname

    const [activeNav, setActiveNav] = useState('/')

    useEffect(() => {
        if(pathname.toLowerCase().includes('doctors')){
            setActiveNav('doctors')
        } else if(pathname.toLowerCase().includes('departments')) {
            setActiveNav('deparments')
        } else if(pathname.toLowerCase().includes('schools')) {
            setActiveNav('schools')
        } else if(pathname.toLowerCase().includes('about')) {
            setActiveNav('about')
        } else if(pathname.toLowerCase().includes('contact')) {
            setActiveNav('contact')
        } else{
            setActiveNav('home')
        }
    }, [pathname])

    const displayNavLinks = navLinks.map((navLink, i) => {
        const { name, path } = navLink
        const isActive = name.toLowerCase() == activeNav.toLowerCase() ? true : false

        return (
            <p 
                key={i} 
                className="nav-link-text p-0 m-0 clickable"
                style={{
                    color: isActive ? '#000FB0' : '#737373'
                }}
            >
                {name}
            </p>
        )
    })

    return (
        <div className="py-3 px-lg-5 px-4 nav-bg">
            <div className="d-lg-flex justify-content-between align-items-center d-none">
                <div className="col-lg-2 d-flex align-items-center">
                    <div>
                        <img src={logo} />
                    </div>
                    <div>
                        <h1 className="nav-logo-text m-0 p-0 mx-3">UTCH</h1>
                    </div>
                </div>
                <div className="col-lg-5 d-flex justify-content-between">
                    {
                        displayNavLinks
                    }
                </div>
                <div className="col-lg-2 d-flex align-items-center">
                    <div>
                        <button className="nav-signup-btn py-1 px-3 mx-1">
                            Sign up
                        </button>
                    </div>                     
                    <div>
                        <button className="nav-login-btn py-1 px-3 mx-1">
                            Login
                        </button>
                    </div>                   
                </div>
            </div>

            <div className="d-flex justify-content-between align-items-center d-lg-none">
                <div className="col-lg-2 d-flex align-items-center">
                    <div>
                        <img src={logo} />
                    </div>
                    <div>
                        <h1 className="nav-logo-text m-0 p-0 mx-3">UTCH</h1>
                    </div>
                </div>
                <div>
                    <IoIosMenu size={30} color="#000" className="clickable" />
                </div>
            </div>
        </div>
    )
}