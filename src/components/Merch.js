import React, { Component } from 'react'
import img1 from '../images/Sport_black.jpg';
import img2 from '../images/CS26_mustard.jpg';
import img3 from '../images/Bisou_blue-gray.jpg';
import img4 from '../images/SS_deep-forest.jpg';
import img5 from '../images/MiniVelo_rose.jpg';
import img6 from '../images/Little_cedar-green.jpg';

export default class Merch extends Component {
    render() {
        return (
            <div>
                <div id="merch-header">MEET THE TOKYOBIKE LINE UP</div>
                <div>
                    <img src={img1}></img>
                    <img></img>
                    <img></img>
                    <img></img>
                    <img></img>
                    <img></img>
                </div>
            </div>
        )
    }
}
