import React from 'react';
import { useParams } from "react-router-dom";
import { connect } from 'react-redux';

const ItemPage = ({ id, data }) => {   
    console.log(data);
    const { name, tagline, description, first_brewed, image_url } = data || {};    

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

const mapStateToProps = (state, { id }) => {
    return {
        data: state.items[id].data
    }
}

export default connect(mapStateToProps)(ItemPage);