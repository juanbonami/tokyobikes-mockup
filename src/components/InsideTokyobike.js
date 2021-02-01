import React, { Component } from 'react'
import img1 from '../images/Features_530x.jpg';
import img2 from '../images/Collabs_530x.jpg';
import img3 from '../images/Tokyo-by-tokyobike_530x.jpg';

export default class InsideTokyobike extends Component {
    render() {
        return (
            <div>
                
                    <p id="tokyobike-header">INSIDE TOKYOBIKE</p>
                    <div className="tokyobike-layout-two">                                               
                        <div className="content-item">                        
                        <img height={360} src={img1}></img>  
                        </div>                        
                        <div className="content-item">                         
                        <img height={360} src={img2}></img> 
                        </div>                        
                        <div className="content-item">                         
                        <img height={360} src={img3}></img> 
                        </div>                                              
                    </div>

                    <div className="content-item">
                       <div>
                        <h5>A DAY AT CANNON BEACH</h5>
                          <p>A day off and a summer ride along the scenic coastline of Cannon<br></br> Beach, Oregon.</p>
                          <a>SEE MORE</a>
                        </div>
                        <div>
                            <h5>COLLABORATIONS</h5>
                          <p>Collaborations are a huge part of our DNA, click and explore <br></br> some of our favorites.</p>
                          <a>SEE ALL</a>
                        </div>
                        <div>
                            <h5>WHEN IN TOKYO</h5>
                          <p>Enjoy this evolving compilation of our favorite places, created to <br></br> help you explore Tokyo at your own pace.</p>
                          <a>TAKE ME THERE</a> 
                        </div> 
                    </div>
                    
                        
                        
                
            </div>
        )
    }
}
