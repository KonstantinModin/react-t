import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchItem } from './redux/actions';

const CatalogItem = ({ id, info, fetchItem }) => {
    
    const { shouldFetch, data, error, loading } = info;

    useEffect(()=>{
        if (shouldFetch) {
            fetchItem(id);
        }
    }, [id, shouldFetch, fetchItem ]);
    

    return (
        <div className="catalogItem">
            <h3>Data: </h3>
            <h6>Number {id}</h6>
            <h6>loading {loading}</h6>
            <h6>error {error}</h6>
        </div>
    )
}

export default connect(null, { fetchItem })(CatalogItem);