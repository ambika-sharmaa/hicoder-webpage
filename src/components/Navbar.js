import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa';
import { GrMapLocation } from "react-icons/gr";
import { FiPhoneCall } from "react-icons/fi";
import {AiOutlineMail, AiOutlineClockCircle} from "react-icons/ai";
import {Button} from './Button';
import './Navbar.css';

function Navbar() {
    const[click,setClick]=useState(false);
    const [button, setButton]=useState(true);

    const handleClick=()=>setClick(!click);
    const closeMobileMenu=()=>setClick(false);

    const showButton= () =>{
        if(window.innerWidth<=960){
            setButton(false);
        }else{
            setButton(true);
        }
    };

    window.addEventListener('resize',showButton);

    return (
        <>
         <div className="navbar">
            <div className="navbar-container container">
             <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                <img src='images/logo-dark.png' />
             </Link> 
             <div className='menu-icon' onClick={handleClick}>
                {click? <FaTimes/> :<FaBars/>}
             </div>
             <ul className={click?'nav-menu active':'nav-menu'}>
                 <li className='nav-item dropdown'>
                        <button class="dropbtn">Hicoder
                        <i class="fa fa-caret-down"></i>
                        </button>
                        <div class="dropdown-content">
                        <a href="">About</a>
                        <a href="">Contact</a>
                        <a href="">Blog</a>
                        </div>
                 </li>
                 <li className='nav-item dropdown'>
                     <button class="dropbtn">Course
                        <i class="fa fa-caret-down"></i>
                        </button>
                        <div class="dropdown-content">
                        <a href="">What you learn?</a>
                        <a href="">How to apply?</a>
                        <a href="">Fee Structure</a>
                        <a href="">Apply</a>
                        </div>
                 </li>
                 <li className='nav-item dropdown'>
                     <button class="dropbtn">Hire
                        <i class="fa fa-caret-down"></i>
                        </button>
                        <div class="dropdown-content">
                        <a href="">Hire</a>
                        </div>
                 </li>
                 <li className='nav-btn'>
                     {button ? (
                         <Link to='/' className='btn-link'>
                             <Button buttonStyle='btn--primary'>Apply Now</Button>
                         </Link>
                     ):(
                         <Link to='/' className='btn-link' onClick={closeMobileMenu}>
                             <Button buttonStyle='btn--outline' buttonSize='btn--mobile'>Apply Now</Button>
                         </Link>  
                     )}
                 </li>
                 <li className='summary'>
                 <div id="menuToggle">
                    <input type="checkbox" />
                    <span></span>
                    <span></span>
                    <span></span>
                    <ul id="menu">
                        <div>
                        <img src='images/logo-dark.png' />
                        </div>        
                        &nbsp;
                        <div>
                        HiCoder enables students in being capable to develop production grade application by availing full stack development, Soft skills, Analytics and project management skills to get a core software job in the Industry.
                        </div>
                        &nbsp;
                        <div>
                            <h5><GrMapLocation/> 264/L3, Kavuri Hills Phase 2, HiTech City, Madhapur, Telangana, India, PIN: 500033</h5>
                        </div>
                        &nbsp;
                        <div>
                            <h5><FiPhoneCall/><a href="tel:9206980980">  (+91) 9206 980 980</a> </h5>
                        </div>
                        &nbsp;
                        <div>
                            <h5><AiOutlineMail/> <a href = "mailto: admission@hicoder.in">admission@hicoder.in</a></h5>
                        </div>
                        &nbsp;
                        <div>
                            <h5><AiOutlineClockCircle/> 10:00AM - 06:00PM</h5>
                        </div>
                    </ul>
            </div>
                 </li>
             </ul>   
             
            </div>
        </div>   
    </>
    )
}

export default Navbar
