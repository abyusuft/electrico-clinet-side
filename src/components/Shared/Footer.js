import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/elogo.png'

const Footer = () => {
    return (

        <footer class="footer p-10 bg-primary text-white">
            <div>
                <img src={logo} height="120" width='120' alt="" />
                <p>ElectriCo Manufecturing<br />Providing reliable tech since 1992</p>
            </div>
            <div>
                <span class="footer-title">Services</span>
                <Link to='/' class="link link-hover">Home</Link>
                <Link to='/blog' class="link link-hover">Blog</Link>
                <Link to='/products' class="link link-hover">Product</Link>
                <Link to='/portfolio' class="link link-hover">Portfolio</Link>
            </div>
            <div>
                <span class="footer-title">Company</span>
                <span class="link link-hover">About us</span>
                <span class="link link-hover">Contact</span>
                <span class="link link-hover">Jobs</span>
                <span class="link link-hover">Press kit</span>
            </div>
            <div>
                <span class="footer-title">Legal</span>
                <span class="link link-hover">Terms of use</span>
                <span class="link link-hover">Privacy policy</span>
                <span class="link link-hover">Cookie policy</span>
            </div>
        </footer>
    );
};

export default Footer;