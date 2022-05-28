import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/elogo.png'

const Footer = () => {
    return (

        <footer className="footer p-10 bg-primary text-white">
            <div>
                <img src={logo} height="120" width='120' alt="" />
                <p>ElectriCo Manufecturing<br />Providing reliable tech since 1992</p>
            </div>
            <div>
                <span className="footer-title">Services</span>
                <Link to='/' className="link link-hover">Home</Link>
                <Link to='/blog' className="link link-hover">Blog</Link>
                <Link to='/products' className="link link-hover">Product</Link>
                <Link to='/portfolio' className="link link-hover">Portfolio</Link>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <span className="link link-hover">About us</span>
                <span className="link link-hover">Contact</span>
                <span className="link link-hover">Jobs</span>
                <span className="link link-hover">Press kit</span>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <span className="link link-hover">Terms of use</span>
                <span className="link link-hover">Privacy policy</span>
                <span className="link link-hover">Cookie policy</span>
            </div>
        </footer>
    );
};

export default Footer;