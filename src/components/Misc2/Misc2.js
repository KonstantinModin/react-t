import React from 'react';
import Menu from './Menu';
import Test from './Test';
import './Misc2.css';

const Misc2 = () => {
    return (
        <div className="Misc2">
            <h1>Info</h1>
            <div className="grid">
                <Menu />
                <Test>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                </Test>
                <div><span>3</span></div>
                <div><span>4</span></div>
                {/* <div><span>5</span></div>
                <div><span>6</span></div>
                <div><span>7</span></div>
                <div><span>8</span></div>
                <div><span>9</span></div> */}
            </div>
        </div>
    )
}

export default Misc2;
