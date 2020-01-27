import React from 'react';

const CatalogItem = ({ id }) => {
    return (
        <div className="catalogItem">
            <h3>Some Item</h3>
            <h6>Number {id}</h6>
        </div>
    )
}

export default CatalogItem;