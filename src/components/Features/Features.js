import React from 'react';
import Shadow from './Shadow';
import './Features.css';

const Features = () => {
    return (
        <div className="Features">
            <h1>Features</h1>                
            <div className="Grid">
                <Shadow />                    
                <div className="Block2">
                    <div className="innerDiv">2</div>
                </div>
                <div className="Block3">
                    <div className="innerDiv">3</div>
                </div>
                <div className="Block4">
                    <div className="innerDiv">4</div>
                </div>
                <div className="Block5">
                    <div className="innerDiv">5</div>
                </div>
                <div className="Block6">
                    <div className="innerDiv">6</div>
                </div>                
            </div>
        </div>
    )    
}

export default Features;
