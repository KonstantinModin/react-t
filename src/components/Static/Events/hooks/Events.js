// import React, { useState, createRef } from 'react';
// import axios from 'axios';
// import PersonInfo from './PersonInfo';
// import './Events.css';

// const Events = () => {
//     const [ targ, setTarg ] = useState(null);
//     const [ offset, setOffset ] = useState(null);
//     const [ pageX, setPageX ] = useState(null);
//     const [ selected, setSelected ] = useState(null);
//     const outerDiv = createRef();

//     const arr = [
//         {name: 'Jhon', id:25, age: 24},
//         {name: 'Mary', id:48, age: 23},
//         {name: 'Scarlet', id:15, age: 21},
//     ];    

//     function eventHandler(e) {    
//         e.persist();
//         console.log(e);
//         console.dir(outerDiv.current);
//         console.log(e.target.offsetX);
//         setTarg(e.target.className);
//         setOffset(e.nativeEvent.offsetX)
//         setPageX(e.nativeEvent.pageX-outerDiv.current.offsetLeft);
//         console.log(outerDiv.current);
//     };
//     const getData = async () => {
//         const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
//         const data = await axios(endpoint);
//         console.log(data);

//     }
//     const personHandleClick = (id) => {
//         setSelected(id);
//     }    

//     return (
//         <div className="Events" onClick={eventHandler} ref={outerDiv}>
//             <div>
//                 <h1>Events</h1>
//                 <h2>Target: {targ}. <br/> OffsetX: {offset}</h2><br/>
//                 <h2>PageX - div.offsetLeft: {pageX}</h2>
//                 <div className="other"></div>
//                 <div className="outer" >
//                     Внешний
//                     <div className="mid" >
//                         Средний2
//                         <div className="inn" >
//                             Внутренний
//                         </div>
//                     </div>
//                 </div>
//                 <button onClick={getData}>Get Data</button>    
//             </div>
//             <div>
//                 <ul>
//                     {arr.map(({name, id, age})=><li onClick={()=>personHandleClick(id)} key={id}>Name:{name}, Age:{age}</li>)}                    
//                 </ul>
//                 <PersonInfo id={selected} />
//             </div>
            
//         </div>
//     )
// }

// export default Events;



import React, { useState, useEffect } from 'react';
import PersonInfo from './PersonInfo';
import * as UserApi from './usersApi';
// import './Events.css';

const Events = () => {
    const [ state, setState ] = useState({
        users: null,       
        loaded: false 
    });

    const [ selected, setSelected ] = useState(null);

    useEffect(()=>{
        console.log('effect Main');
        UserApi.all().then(users => {
            setState({ users, loaded:true });
        });
    },[]);
   
  
    
    if (!state.loaded) return <div>Loading...</div>
    
    return (
        <div>
            <h4>With Hooks</h4>
                <ul>
                {state.users.map(({name, id})=>(
                    <li onClick={()=>setSelected(id)} 
                    key={id}
                    className={id===selected ? 'text-success' : ''}>
                        Name:{name}
                    </li>)
                )}                    
            </ul>
                {!selected? <div>Please select person... </div>:<PersonInfo id={selected} />}                
        </div>
    )
    
}

export default Events;

