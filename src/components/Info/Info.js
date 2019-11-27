import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './ReduxFav/reducers/';
import Menu from './Menu';
import Test from './Test';
import Hooks from './Hooks';
import ReduxFav from './ReduxFav';
import './Info.css';

const store = createStore(reducer);

const Info = () => {
    return (
        <div className="Info">
            <h1>Info</h1>
            <div className="grid">
                <Menu />
                <Test>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                </Test>
                <Hooks />
                <Provider store={store}>
                    <ReduxFav />
                </Provider>
                {/* <div><span>5</span></div>
                <div><span>6</span></div>
                <div><span>7</span></div>
                <div><span>8</span></div>
                <div><span>9</span></div> */}
            </div>
        </div>
    )
}

export default Info;
