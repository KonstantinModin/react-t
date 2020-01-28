import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import CatalogItem from './CatalogItem';

const Catalog = ({ items, addNewPage }) => {
    useEffect(()=>{

    },[])

    return (
        <div className="catalog">
            {/* {[...Array(50)].map((e,i)=><CatalogItem id={i} key={i} />)} */}
            <button onClick={addNewPage}>Add it! </button>            
        </div>
    )
}

const mapStateToProps = state => {
    return {
        items: state.items
    }
};

export default connect(mapStateToProps, actions)(Catalog);