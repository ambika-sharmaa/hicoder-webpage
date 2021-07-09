import React from 'react';
import { GoLocation } from "react-icons/go";
import { FiPhoneCall } from "react-icons/fi";
import {FaFacebook} from "react-icons/fa";
import {AiOutlineMail, AiOutlineClockCircle, AiOutlineInstagram, AiFillLinkedin, AiFillTwitterCircle} from "react-icons/ai";
import {Button} from './Button';
import './Footer.css';


function Footer() {
    return (
        <div>
            <footer class="footer">
            <div class="container bottom_border">
                <div class="column1 col-6">
                    <img src='images/logo-dark.png'/>
                    <p class="mb10">HiCoder enables students in being capable to develop production grade application by availing full stack development, Soft skills, Analytics and project management skills to get a core software job in the Industry.</p>
                    <Button buttonSize='btn--outline' buttonColor='blue'>
                            Apply Now
                    </Button>            
                </div>

                <div class="column1 col-6">
                    <h5 class="headin5_amrc col_white_amrc pt2">Contact</h5>
                    <ul class="footer_ul_amrc">
                        <li><p><GoLocation/> 264/L3, Kavuri Hills Phase 2, HiTech City, Madhapur, Telangana, India, PIN: 500033 </p></li>
                        <li><p><FiPhoneCall/>  tel:9206980980  </p></li>
                        <li><p><AiOutlineMail/> admission@hicoder.in  </p></li>
                        <li><p><AiOutlineClockCircle/> 10:00AM - 06:00PM  </p></li>
                    </ul>
                </div>

                <div class="column1 col-6">
                    <h5 class="headin5_amrc col_white_amrc pt2">Info</h5>
                    <ul class="footer_ul_amrc">
                        <li><a href="">Home</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Blog</a></li>
                        <li><a href="">FAQ</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </div>
            </div>


            <div class="container">
            <ul class="foote_bottom_ul_amrc">
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">FAQ</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">Contact</a></li>
            </ul>
            <p class="text-center">Copyright @2020 | <a href="#">HiCoder Pvt. Ltd.</a></p>

            <ul class="social_footer_ul">
            <li><a href="https://www.instagram.com/hicoderofficial/"><AiOutlineInstagram/></a></li>
            <li><a href="https://www.facebook.com/hicoderofficial"><FaFacebook/></a></li>
            <li><a href="https://www.linkedin.com/company/hicoder/"><AiFillLinkedin/></a></li>
            <li><a href="https://twitter.com/hicoderofficial"><AiFillTwitterCircle/></a></li>
            </ul>
            </div>

            </footer>

        </div>
    )
}

export default Footer;
