import React from 'react';
import { useLocation } from "react-router-dom";

const ItemPage = () => {    
    const location = useLocation();

    console.log(location);
    
    const { name, tagline, description, first_brewed, image_url } = location.state;    

    return (
        <div className="itemPage">            
            <div className="title">
                <img src={image_url} alt={tagline} />
                <h3>{name}</h3>
            </div>
            <h5>{tagline}</h5>
            <p><span>First Brewed: </span>{first_brewed}</p>
            <p>{description}</p>            
            <button type="button" className="btn btn-outline-danger">Go back ...</button>
        </div>
    )
}

export default ItemPage;