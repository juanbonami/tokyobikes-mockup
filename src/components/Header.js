// import src from '*.avif'
import React, { Component } from 'react'
import logo from '../images/logo.png';
import logo2 from '../images/tokyobike-Oksana.jpg';

export default class Header extends Component {
    render() {
        return (
            <div>
                <div className="header">
                    <div className="logo">
                        <img src={logo} width="100px" height="24px"></img>  
                    </div>
                    <div>SHOP</div>
                    <div>INSIDE TOKYOBIKE</div>
                    <div>MY ACCOUNT</div>
                    <div>CART</div>
                </div>
                <div className="container">
                 <div className="image-container">
                  <img  src={logo2}></img>
                    <div className="image-container-child">
                      <div className="image-text">Our little tokyobike</div>
                      <div className="image-text">The same attention to detail and simple, functional design as the grown-up version, but shrunk to perfection.</div>
                      <a id="shop-me-button" className="image-text">SHOP NOW</a>
                    </div>  
                </div>
                  <div className="button">hello</div> 
                </div>
                
                
                
            </div>
            
        )
    }
}
