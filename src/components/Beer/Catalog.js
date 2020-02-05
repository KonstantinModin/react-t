import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { addNewPage, updateFirstStart } from './redux/actions';
import CatalogItem from './CatalogItem';

const Catalog = ({ items, scroll, firstStart, addNewPage, updateFirstStart }) => {
    const catRef = useRef();

    useEffect(()=>{
        //initialization (addin first page to infinite scroll );
        console.log('use effect catalog');

        if (catRef.current) {
            catRef.current.scrollTo(0, scroll);
        }

        if (firstStart) {
            console.log('use effect catalog- firstStart');
            addNewPage();
            updateFirstStart(false);
        }
    }, [addNewPage, firstStart, updateFirstStart, scroll]);   

    return (
        <div ref={catRef} className="catalog">
            {items.map((e,i)=><CatalogItem catRef={catRef} id={i} key={i} info={items[i]}/>)}
            <button onClick={addNewPage}>Add it! </button>            
        </div>
    )
}

const mapStateToProps = ({ items, sys: { firstStart, scroll } }) => {
    return { items, firstStart, scroll }
};

export default connect(mapStateToProps, { addNewPage,  updateFirstStart })(Catalog);