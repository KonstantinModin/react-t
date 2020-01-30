import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchItem } from './redux/actions';

const CatalogItem = ({ id, info, fetchItem }) => {
    
    const { shouldFetch, data, error, loading } = info;
    const { name, tagline, description, first_brewed, image_url } = data || {};

    useEffect(()=>{
        if (shouldFetch) {
            fetchItem(id);
        }
    }, [id, shouldFetch, fetchItem ]);
    

    return loading || shouldFetch ? 'Loading...': (
        <div className="catalogItem">
            <div className="title">
                <img src={image_url} alt={tagline} />
                <h3>{name}</h3>
            </div>
            <h5>{tagline}</h5>
            <p><span>First Brewed: </span>{first_brewed}</p>
            <p>{description}</p>            
            <button type="button" class="btn btn-outline-danger">More info ...</button>
        </div>
    )
}

export default connect(null, { fetchItem })(CatalogItem);