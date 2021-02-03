import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer>
                    <div className="footer-container">
                        <div className="footer-section">
                            <ul>
                                <li>tokyobike</li>
                                <li>About us</li>
                                <li>faq</li>
                                <li>privacy policy</li>
                                <li>terms & conditions</li>
                                <li>reviews</li>
                                <li>serach</li>
                            </ul>
                        </div>

                        <div className="footer-section">
                            <ul>
                                <li>costomer service</li>
                                <li>exchanges & returns</li>
                                <li>assembly</li>
                                <li>warranty</li>
                                <li>financing</li>
                                <li>4-day sale t&c</li> 
                            </ul>                           
                        </div>

                        <div className="footer-section">
                            <ul>
                                <li>newsletter</li>
                                <li>Sign up for our newsletter and be in the know about upcoming tokyobike events, collaborations, product release, early access & more!</li>
                                <li><input placeholder="Add your email here"></input> <a href="">sign up</a></li>
                            </ul>
                            
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}
