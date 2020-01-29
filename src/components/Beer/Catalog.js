import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { addNewPage } from './redux/actions';
import CatalogItem from './CatalogItem';

const Catalog = ({ items, addNewPage }) => {
    useEffect(()=>{
        //initialization (addin first page to infinite scroll )
        addNewPage();
    }, [addNewPage])

    return (
        <div className="catalog">
            {items.map((e,i)=><CatalogItem id={i} key={i} info={items[i]}/>)}
            <button onClick={addNewPage}>Add it! </button>            
        </div>
    )
}

const mapStateToProps = state => {
    return {
        items: state.items
    }
};

export default connect(mapStateToProps, { addNewPage })(Catalog);