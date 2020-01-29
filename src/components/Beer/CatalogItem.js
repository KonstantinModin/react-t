import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchItemRequest } from './redux/actions';

const CatalogItem = ({ id, info, fetchItemRequest }) => {
    
    const { shouldFetch, data, error, loading } = info;

    useEffect(()=>{
        if (shouldFetch) {
            fetchItemRequest(id);
        }
    },[id]);
    

    return (
        <div className="catalogItem">
            <h3>Data: {data}</h3>
            <h6>Number {id}</h6>
            <h6>loading {loading}</h6>
            <h6>error {error}</h6>
        </div>
    )
}

export default connect(null, { fetchItemRequest })(CatalogItem);