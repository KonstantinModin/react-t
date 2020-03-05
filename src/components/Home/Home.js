import React from 'react';
import portf from './portf.jpg';
import './Home.css';

const Home = () => { 
    return (
        <div className="Home">
            <div className="title">
                <h1>Select any menu item provided above</h1>
                <span className="finger" role="img" aria-label="finger up">☝</span>
            </div>
            <div className="portfolioLink">
                <a className='link' href='https://cranky-hodgkin-28e9ed.netlify.com' target="_blank" rel="noopener noreferrer">
                    <img src={portf} alt="portf logo" />
                    <h2>If you wanna visit my portfolio site please click here</h2>
                </a>
            </div>
        </div>
    )
};

export default Home;