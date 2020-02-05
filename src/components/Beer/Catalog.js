import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { addNewPage, updateFirstStart } from './redux/actions';
import CatalogItem from './CatalogItem';

const Catalog = ({ items, addNewPage, firstStart,  updateFirstStart }) => {
    useEffect(()=>{
        //initialization (addin first page to infinite scroll )
        if (firstStart) {
            addNewPage();
            updateFirstStart(false);
        }
    }, [addNewPage, firstStart])

    return (
        <div className="catalog">
            {items.map((e,i)=><CatalogItem id={i} key={i} info={items[i]}/>)}
            <button onClick={addNewPage}>Add it! </button>            
        </div>
    )
}

const mapStateToProps = state => {
    return {
        items: state.items,
        firstStart: state.sys.firstStart
    }
};

export default connect(mapStateToProps, { addNewPage,  updateFirstStart })(Catalog);