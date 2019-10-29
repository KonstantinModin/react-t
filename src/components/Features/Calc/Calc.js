import React from 'react';
import './Calc.css';

const Calc = () => {
    const controls = [
        {id:1, label:'%', action:'PER', type:''},
        {id:2, label:'sqrt', action:'SQR', type:''},
        {id:3, label:'x2', action:'SQR', type:''},
        {id:4, label:'1/x', action:'REV', type:''},
        {id:5, label:'CE', action:'CE', type:''},
        {id:6, label:'C', action:'C', type:''},
        {id:7, label:'<', action:'DEL', type:''},
        {id:8, label:'/', action:'DIV', type:''}, 
        {id:9, label:'7', action:'7', type:'num'},
        {id:10, label:'8', action:'8', type:'num'},
        {id:11, label:'9', action:'9', type:'num'},
        {id:12, label:'*', action:'MUL', type:''},
        {id:13, label:'4', action:'4', type:'num'},
        {id:14, label:'5', action:'5', type:'num'},
        {id:15, label:'6', action:'6', type:'num'},
        {id:16, label:'-', action:'SUB', type:''},
        {id:17, label:'1', action:'1', type:'num'},
        {id:18, label:'2', action:'2', type:'num'},
        {id:19, label:'3', action:'3', type:'num'},
        {id:20, label:'+', action:'ADD', type:''},
        {id:21, label:'+-', action:'CHG', type:''},
        {id:22, label:'0', action:'0', type:'num'},    
        {id:23, label:',', action:'PNT', type:''},    
        {id:24, label:'=', action:'EQL', type:''}    
    ];

    return (
        <div className="Calc">
            <h3>Calculator (with Redux)</h3>
            <div>0</div>
            <div className="Controls">
                {controls.map(({id, label, action, type})=>
                    <div key={id} action={action} className={type}><span>{label}</span></div>
                )}
            </div>
        </div>
    )
}

export default Calc;
