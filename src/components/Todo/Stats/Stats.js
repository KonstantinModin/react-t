import React from 'react';
import { connect } from 'react-redux';
import './Stats.css';

const Stats = ({ todos }) => {    
    const all = todos.length;
    const [a,b,c,d,e,f,g,h] = todos.reduce(([a,b,c,d,e,f,g,h],
        {buttons:[j,k,l,m,n,o,p,q]})=>[a+j,b+k,c+l,d+m,e+n,f+o,g+p,h+q],[0,0,0,0,0,0,0,0]);
    
    return (
        <div className="stats">{all} tasks to do. Importants: {a}. Urgents: {b}. Importants globaly: {c}. 
        Magic required: {d}. Radioactives: {e}. Matter of life and death: {f}. 
        Not important at all: {g}. You can forget about it: {h}.</div>
    )
}

export default connect(({todos})=>({todos}))(Stats);