import React, { useEffect, useRef, useCallback } from 'react';
import { connect } from 'react-redux';
import { addNewPage, updateFirstStart, setScrollTop } from './redux/actions';
import CatalogItem from './CatalogItem';

const Catalog = ({ items, scroll, firstStart, addNewPage, updateFirstStart, setScrollTop }) => {
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
        console.log('use effect catalog', catRef.current);

        if (catRef.current) {
            catRef.current.scrollTo(0, scroll);
        }

        if (firstStart) {
            console.log('use effect catalog- firstStart');
            addNewPage();
            updateFirstStart(false);
        }        

        return () => {
            console.log('catalog effect cleanup');
            if (catRef.current) {
                setScrollTop(catRef.current.scrollTop);
            };
        }
    }, [addNewPage, firstStart, updateFirstStart, scroll, setScrollTop]);   

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
        </div>
    )
}

const mapStateToProps = ({ items, sys: { firstStart, scroll } }) => {
    return { items, firstStart, scroll }
};

export default connect(mapStateToProps, { addNewPage,  updateFirstStart, setScrollTop } )(Catalog);