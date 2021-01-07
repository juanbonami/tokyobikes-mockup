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
                <div className="image-container">
                  <img  src={logo2}></img>
                  <div className="image-container-child">hello</div>  
                </div>
                
            </div>
            
        )
    }
}
