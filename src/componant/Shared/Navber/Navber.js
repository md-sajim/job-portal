import React from 'react';
import './Navber.css'

const Navber = () => {
    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            document.getElementById("navbar").style.padding = "30px 10px";
            document.getElementById("logo").style.fontSize = "25px";
        } else {
            document.getElementById("navbar").style.padding = "80px 10px";
            document.getElementById("logo").style.fontSize = "35px";
        }
    }
    return (
        <div>

            <div id="navbar">
                <a href="#default" id="logo">Real<span>job</span></a>
                <div id="navbar-right">
                    <a className="" href="#home">Home</a>
                    <a href="#contact">Contact</a>
                    <a href="#about">About</a>
                    <a href="#signin">Sign In</a>
                </div>
            </div>

            
        </div>
    );
};

export default Navber;