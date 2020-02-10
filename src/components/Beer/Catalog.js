import React, { useEffect, useRef, useCallback } from 'react';
import { connect } from 'react-redux';
import { addNewPage, updateFirstStart } from './redux/actions';
import CatalogItem from './CatalogItem';

const Catalog = ({ items, scroll, firstStart, addNewPage, updateFirstStart }) => {
    const catRef = useRef(); //ref to save scrolling position

    const observer = useRef(); // infinite scroll
    const lastCatalogItem = useCallback(item => {        
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(array => {            
            if (array[0].isIntersecting) {                
                if (items.length < 315) addNewPage();                
            }
        })
        if (item) observer.current.observe(item);
    }, [addNewPage, items.length]);

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
            {items.map((e,i)=>{
                if (items.length === i+1) {
                    return (
                        <CatalogItem 
                            ref={lastCatalogItem} 
                            catRef={catRef} 
                            id={i} 
                            key={i} 
                            info={items[i]}
                        />
                    )
                } else {
                    return <CatalogItem catRef={catRef} id={i} key={i} info={items[i]} />
                }
            })}
            <button onClick={addNewPage}>Add it! </button>            
        </div>
    )
}

const mapStateToProps = ({ items, sys: { firstStart, scroll } }) => {
    return { items, firstStart, scroll }
};

export default connect(mapStateToProps, { addNewPage,  updateFirstStart } )(Catalog);