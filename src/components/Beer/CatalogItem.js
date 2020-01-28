import React from 'react';
import { connect } from 'react-redux';

const CatalogItem = ({ id, items }) => {
    const { data='und', error, loading } = items[id];

    return (
        <div className="catalogItem">
            <h3>Data: {data}</h3>
            <h6>Number {id}</h6>
            <h6>loading {loading}</h6>
            <h6>error {error}</h6>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        items: state.items
    }
};

export default connect(mapStateToProps)(CatalogItem);