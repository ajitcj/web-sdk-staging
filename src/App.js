import React, { Component } from 'react'
import Layer1 from './1Layer1.png';
import Layer2 from './2 Layer2.png';
import Layer3 from './3 Layer3.png';
import Layer4 from './4 Layer4.png';
import Layer5 from './5 Mountains.png';
import Layer6 from './6 Sun.png';
import Layer7 from './7 Clouds.png';
import Layer8 from './7 Clouds2.png';
import Layer9 from './8 Stars.png';
import Layer10 from './8 Stars2.png';
import './App.css';
import gsap from "gsap";

export default class App extends Component {

  componentDidMount(){
    gsap.fromTo(".layer1", {x: -10}, {duration: 15, x: 50, repeat: -1, yoyo:true});
    gsap.fromTo(".layer2", {x: 50}, {duration: 15, x: -10, repeat: -1, yoyo:true});
    gsap.fromTo(".layer3", {x: -10}, {duration: 15, x: 50, repeat: -1, yoyo:true});
    gsap.fromTo(".layer4", {x: 50}, {duration: 15, x: -10, repeat: -1, yoyo:true});
    gsap.fromTo(".layer5", {x: -10}, {duration: 15, x: 50, repeat: -1, yoyo:true});
    gsap.fromTo(".container", {backgroundColor:'white'}, {duration: 25, backgroundColor: '#a4508b', backgroundImage:'linear-gradient(326deg, #a4508b 0%, #5f0a87 74%)', repeat: -1, yoyo:true});
    gsap.fromTo(".layer6", {x: -200, y: 50}, {duration: 25, x: 100, y: 300, repeat: -1, yoyo:true});
  }

  mouseMoved() {

  }

  render() {
    return (
      <div onMouseMove={()=>{this.mouseMoved()}} className='container'>
        <img className='img layer1' src={Layer1} alt='img'></img>
        <img className='img layer2' src={Layer2} alt='img'></img>
        <img className='img layer3' src={Layer3} alt='img'></img>
        <img className='img layer4' src={Layer4} alt='img'></img>
        <img className='img layer5' src={Layer5} alt='img'></img>
        <img className='img layer6' src={Layer6} alt='img'></img>
        <img className='img layer7' src={Layer7} alt='img'></img>
        <img className='img layer8' src={Layer8} alt='img'></img>
        <img className='img layer9' src={Layer9} alt='img'></img>
        <img className='img layer10' src={Layer10} alt='img'></img>
      </div>
    )
  }
}