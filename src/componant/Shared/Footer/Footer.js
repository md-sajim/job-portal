import React from 'react';
import './Footer.css'
import { FaFacebookSquare, FaInstagram, FaTwitter, FaYoutube, IconName } from "react-icons/fa";

const Footer = () => {
    return (
        <div style={{ backgroundColor: "#f1f1f1" }}>

            <div className='row container mx-auto pt-5'>
                <div className='row col-6'>
                    <div className='col-4'>
                        <h4>Section</h4>
                        <h6>Home</h6>
                        <h6>Features</h6>
                        <h6>Pricing</h6>
                        <h6>FAQs</h6>
                        <h6>About</h6>
                    </div>
                    <div className='col-4'>
                        <h4>Section</h4>
                        <h6>Home</h6>
                        <h6>Features</h6>
                        <h6>Pricing</h6>
                        <h6>FAQs</h6>
                        <h6>About</h6>
                    </div>
                    <div className='col-4'>
                        <h4>Section</h4>
                        <h6>Home</h6>
                        <h6>Features</h6>
                        <h6>Pricing</h6>
                        <h6>FAQs</h6>
                        <h6>About</h6>
                    </div>
                </div>
                <div className='col-6 d-flex justify-content-center'>
                    <div className=''>
                        <h4>Subscribe to our newsletter</h4>
                        <p>Monthly digest of whats new and exciting from us.</p>
                        <div className='d-flex'>
                            <input type="email" className="form-control border-end-0" placeholder="Email address" />
                            <a className="btn-castom btn border-start-0" href="#0" >Subscribe Now</a>
                        </div>
                    </div>

                </div>
            </div>
            <hr />
            <footer id="footer" className="footer-1">
                <div className="main-footer widgets-dark typo-light">
                    <div className="container">
                        <div className="row">

                            <div className="col-xs-12 col-sm-6 col-md-3">
                                <div className="widget subscribe no-box">
                                    <h5 className="widget-title" id='compane-name'>Real<b>job</b><span></span></h5>
                                    <p>About the company, little discription will goes here.. </p>
                                </div>
                            </div>

                            <div className="col-xs-12 col-sm-6 col-md-3">
                                <div className="widget no-box">
                                    <h5 className="widget-title">Quick Links<span></span></h5>
                                    <ul className="thumbnail-widget">
                                        <li>
                                            <div className="thumb-content"><a href="#.">Get Started</a></div>
                                        </li>
                                        <li>
                                            <div className="thumb-content"><a href="#.">Top Leaders</a></div>
                                        </li>
                                        <li>
                                            <div className="thumb-content"><a href="#.">Success Stories</a></div>
                                        </li>
                                        <li>
                                            <div className="thumb-content"><a href="#.">Event/Tickets</a></div>
                                        </li>
                                        <li>
                                            <div className="thumb-content"><a href="#.">News</a></div>
                                        </li>
                                        <li>
                                            <div className="thumb-content"><a href="#.">Lifestyle</a></div>
                                        </li>
                                        <li>
                                            <div className="thumb-content"><a href="#.">About</a></div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-xs-12 col-sm-6 col-md-3">
                                <div className="widget no-box">
                                    <h5 className="widget-title">Get Started<span></span></h5>
                                    <p>Get access to your full Training and Marketing Suite.</p>
                                    <a className="btn-castom btn" href="#0" >Started Now</a>
                                </div>
                            </div>

                            <div className="col-xs-12 col-sm-6 col-md-3">

                                <div className="widget no-box">
                                    <h5 className="widget-title">Contact Us<span></span></h5>

                                    <p><a href="#0" title="glorythemes">info@domain.com</a></p>
                                    <ul className="social-footer2">
                                        <li className=""><a title="youtube"  href="#0">
                                            <FaYoutube /></a></li>
                                        <li className=""><a href="#0"  title="Facebook">
                                            <FaFacebookSquare /></a></li>
                                        <li className=""><a href="#0"  title="Twitter">
                                            <FaTwitter /></a></li>
                                        <li className=""><a title="instagram"  href="#0">
                                            <FaInstagram /></a></li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <hr />
                <div className="footer-copyright">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <p>Copyright Realjob © 2022. All rights reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default Footer;