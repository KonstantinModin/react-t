import React from 'react';
import CatalogItem from './CatalogItem';
// import { Scrollbars } from 'react-custom-scrollbars';

const Catalog = () => {
    return (
        <div className="catalog">
            {[...Array(45)].map((e,i)=><CatalogItem id={i} key={i} />)}
        </div>
    )
}

export default Catalog;