import React from 'react';
import { connect } from 'react-redux';
import './Stats.css';

const Stats = ({ todos }) => {    
    const all = todos.length;
    const [a,b,c,d,e,f,g,h] = todos.reduce(([a,b,c,d,e,f,g,h],
        {buttons:[j,k,l,m,n,o,p,q]})=>[a+j,b+k,c+l,d+m,e+n,f+o,g+p,h+q],[0,0,0,0,0,0,0,0]);
    
    return (
        <div className="stats">
            <span>{all}</span> tasks to do.  Importants: <span>{a}</span>. Urgents:
             <span>{b} </span>. Importants globaly: <span>{c}</span>. Magic 
             required: <span>{d}</span>. Radioactives: <span>{e}</span>. Matter of life 
             and death: <span>{f}</span>. Not important at all: <span>{g}</span>. You can 
             forget about it: <span>{h}</span>.
        </div>
    )
}

export default connect(({todos})=>({todos}))(Stats);