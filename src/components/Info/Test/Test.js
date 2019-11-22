import React, { useState, useContext } from 'react';
import MyContext from '../../../context/';
import Element from './Element';
import Reciever from './Reciever';
import './Test.css';
import RouterTest from './RouterTest';

const Test = () => {
    // console.dir(props.children);

    // React.Children.map(props.children, item=>{console.log('item', item)});
    
    const [ dataForReciever, setDataForReciever ] = useState('def value');
    const [number, setNumber] = useState(0);

    const context = useContext(MyContext);    

    const handleClick = (event) => {
        const a = event.target;
        console.log(event);
        console.log(event.type);
        console.log(a);
        console.log(event.target.nodeName);

        setTimeout(()=>{
            console.log(event.type);
        },0)
    }
    
    const handleInputNumber = ({target:{value}}) =>{        
        setNumber(prev=>value);
    }

    
    return (
        <div className="Test">
            <div><h2>Test</h2></div>
            <button onClick={handleClick}>Event.type?</button>               
            <Element />
            <div>My context = {context}</div>
            <input onChange={(e)=>setDataForReciever(e.target.value)} value={dataForReciever}/>
            <Reciever data={dataForReciever}/>
            <RouterTest/>
            <input type="number" onChange={handleInputNumber} value={number} />
            <div>{number}</div>
            <div>{typeof number}</div>
        </div>
    )
    
}

export default Test;
