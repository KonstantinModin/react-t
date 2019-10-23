import React, { Component } from 'react';
import './Metronome.css';

export default class Metronome extends Component {
    constructor(props){
        super(props);
        this.timerId = null;
    }

    state = {
        beet: 100,
        play: false
    };

    beetValueHandler = ({ target }) => {        
        this.setState({beet: target.value});
        if (this.state.play) {
            clearInterval(this.timerId);
            this.timerId = setInterval(this.playBeet, 60/target.value*1000);
        }
    }

    playBeet = () => {
        console.log('beet', this.timerId, this.state.beet);
    }

    startButtonHandler = () => {
        this.setState((prevState)=>({play:!prevState.play}),()=>{
            if (this.timerId || !this.state.play) clearInterval(this.timerId);
            if (this.state.play) this.timerId = setInterval(this.playBeet, 60/this.state.beet*1000);
        });        
    }

    componentWillUnmount(){
        clearInterval(this.timerId);
    }

    render() {
        const { beet, play } = this.state;

        return (
            <div className="Metronome">
                <div><h1>Metronome</h1></div>
                <div>Current bit Rate: <label className="beet">{beet}</label> beets per second</div>
                <input onChange={this.beetValueHandler} type="range" min={20} max={240} value={beet}/>
                <button onClick={this.startButtonHandler}>{play ? 'Stop' : 'Start'}</button>
            </div>
        )
    }
}
