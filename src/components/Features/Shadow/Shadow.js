import React, { Component } from 'react';
import './Shadow.css';

export default class Shadow extends Component {
    constructor(props) {
        super(props);
        this.block1 = React.createRef();
        this.shadowText = React.createRef();
        this.state = {
            mouseIn: false,
            xCircle: -50,
            xDirection: 1
        }
    }

    calculateCircle = () => {
        const { mouseIn, xCircle, xDirection } = this.state;
        let yDirection = 1;

        if (!mouseIn) {
            // let r = 50;
            // let yCircle = Math.sqrt(r * r - xCircle * xCircle) * xDirection;
            let yCircle = Math.cos(xCircle/50*Math.PI) * 50 ;
            if (this.shadowText.current) this.draw(xCircle, yCircle);
            console.log(yCircle,xCircle/50);
            const nextXCircle = xCircle + 1 * xDirection;            
            this.setState({xCircle: nextXCircle}, () => {
                if (nextXCircle > 49 || nextXCircle < -49) this.setState({xDirection: xDirection * -1});
            });
        }            
    }

    componentDidMount() {
        this.cycle = setInterval(() => this.calculateCircle(), 10);        
    }

    componentWillUnmount() {
        clearInterval(this.cycle);           
    }    

    mouseMoveHandler = (e) => {
        const walk = 100;        

        const { offsetWidth: width, offsetHeight: height } = this.block1.current;
        let { offsetX: x, offsetY: y } = e;
        if (e.target.localName === 'h1') {
            x += e.target.offsetLeft;
            y += e.target.offsetTop;
        }
       
        const xWalk = ~~((x / width * walk) - walk / 2);
        const yWalk = ~~((y / height * walk) - walk / 2);
        
        this.draw(xWalk, yWalk);        
    }

    draw = (xWalk, yWalk) => {
        const blur = 3;
        this.shadowText.current.style.textShadow = `
            ${xWalk}px ${yWalk}px ${blur}px rgba(255,0,255,0.7),
            ${xWalk * -1}px ${yWalk}px ${blur}px rgba(0,255,255,0.7),
            ${yWalk}px ${xWalk * - 1}px ${blur}px rgba(0,255,0,0.7),
            ${yWalk * -1}px ${xWalk}px ${blur}px rgba(0,0,255,0.7)
        `;
    }

    render() {
        return (
            <div 
                className="Block1" 
                onMouseMove={(e) => this.mouseMoveHandler(e.nativeEvent)}
                onMouseEnter={() => this.setState({mouseIn: true})} 
                onMouseLeave={() => this.setState({mouseIn: false})}
                ref={this.block1}
            >               
                <h1 ref={this.shadowText}>Shadow<br/>Effect</h1>               
            </div>
        )
    }
}