import React, { Component } from 'react';
import './Draw.css';

class Draw extends Component {
    constructor(props){
        super(props);
        this.canvas = React.createRef();
        this.state = {
            mouseDown: false,
            last: [0, 0],
            hue: 0,
            composite: false,
            width: 40,
            widthGrow: 0.2
        };
    } 

    componentDidMount() {        
        const canvas = this.canvas.current;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        const ctx = canvas.getContext('2d');
        
        ctx.strokeStyle = '#BADA55';
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';
        ctx.lineWidth = 50;
    }    

    draw = ({layerX, layerY}) => {
        const { mouseDown, last: [X, Y], hue, composite, width, widthGrow } = this.state;

        if (!mouseDown) return       
               
        const ctx = this.canvas.current.getContext('2d');
        ctx.globalCompositeOperation = composite;
        ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
        ctx.lineWidth = Math.floor(width);
        ctx.beginPath();
        ctx.moveTo(X, Y);
        ctx.lineTo(layerX, layerY);
        ctx.stroke();       
        
        this.setState(state => {
            const newHue = (state.hue + 1) % 360;            
            const newWidth = (state.width + widthGrow);
            return {last: [layerX, layerY], hue: newHue, width: newWidth}
        }, () => {
            if (width > 59) {this.setState({widthGrow: -0.2})}
            if (width < 1) {this.setState({widthGrow: 0.2})}
        });        
    }

    clearHandler = () => {        
        const canvas = this.canvas.current;
        const ctx = canvas.getContext('2d')
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        console.log('Clear done!')
    }
        
    render() {        
        return (
            <div className="Draw">
                <div className="Controls">
                    <h1>Draw</h1>                    
                    <button 
                        className="btn btn-success" 
                        onClick={() => this.setState({composite: 'source-over'})}
                    >Norm</button>
                    <button 
                        className="btn btn-success" 
                        onClick={() => this.setState({composite: 'lighter'})}
                    >Lighter</button>
                    <button 
                        className="btn btn-success" 
                        onClick={() => this.setState({composite: 'multiply'})}
                    >Multiply</button>                
                    <button 
                        className="btn btn-success" 
                        onClick={() => this.setState({composite: 'darken'})}
                    >Darken</button>
                    <button 
                        className="btn btn-success" 
                        onClick={() => this.setState({composite: 'lighten'})}
                    >Lighten</button>
                    <button 
                        className="btn btn-success" 
                        onClick={() => this.setState({composite: 'color-dodge'})}
                    >Color-dodge</button>
                    <button 
                        className="btn btn-success" 
                        onClick={() => this.setState({composite: 'color'})}
                    >Color</button>
                    <button 
                        className="btn btn-danger Clear"
                        onClick={this.clearHandler}
                    >Clear</button>
                </div>
                <canvas 
                    className="Canvas" 
                    onMouseMove={(e) => this.draw(e.nativeEvent)} 
                    onMouseDown={({nativeEvent: {layerX, layerY}}) => {
                        this.setState({mouseDown: true, last: [layerX, layerY ]})
                    }}
                    onMouseUp={() => this.setState({mouseDown: false})}
                    // onMouseOut={() => this.setState({mouseDown: false})}
                    ref={this.canvas} 
                    width="900" 
                    height="800"
                />
            </div>            
        )
    }
};

export default Draw;
