import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

const List = ({ data, handleFavorite, all }) => {
    
    const content = data.filter(i=>all||i.fav).map(({ id, title, description, price, fav})=>(
        <div className="" key={id}>
            <div>{title}</div>
            <div>{description}</div>
            <div>{price} USD</div>
            {all && <button onClick={()=>handleFavorite(id)}>{fav?'Un-':''}Favorite</button>}
        </div>
    ));
    
    return (
        <div className="">
            <nav className="">        
                {content.length ? content : 'No favorites'}
            </nav>
        </div>
    );
}

const mapStateToProps = ({ shop: {data} }) => ({ data });

export default connect(mapStateToProps, actions)(List);