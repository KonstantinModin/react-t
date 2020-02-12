import React, { useEffect, useRef, useCallback } from 'react';
import { connect } from 'react-redux';
import { addNewPage, updateFirstStart, setScrollTop } from './redux/actions';
import CatalogItem from './CatalogItem';

const Catalog = ({ items, scroll, firstStart, addNewPage, updateFirstStart, setScrollTop }) => {
    const catRef = useRef(); //ref to save scrolling position

    const observer = useRef(); // infinite scroll

    const lastCatalogItem = useCallback(item => {          // callback ref for last item
        
        // console.log('callback ref', items.length, item);

        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(array => {            
            if (array[0].isIntersecting) {                
                if (items.length < 315) addNewPage();                
            }
        })
        if (item) observer.current.observe(item);
    }, [addNewPage, items.length]);

    useEffect(()=>{
        console.log('use effect catalog');
        
        if (catRef.current) {
            catRef.current.scrollTo(0, scroll);
        }
        
        //initialization (addin first page to infinite scroll );
        if (firstStart) {
            console.log('use effect catalog- firstStart');
            addNewPage();
            updateFirstStart(false);
        }        

        return () => {
            console.log('catalog effect cleanup');
            //saving scrolling position to redux
            if (catRef.current) {
                // we need last (changed) scrollTop property of catRef.current
                // eslint-disable-next-line
                setScrollTop(catRef.current.scrollTop);
            };
        }
    }, [addNewPage, firstStart, updateFirstStart, scroll, setScrollTop]);   

    return (
        <div ref={catRef} className="catalog">
            {items.map((_,i)=>{
                return (
                    <CatalogItem 
                        ref={items.length - 1 === i ? lastCatalogItem : null} 
                        id={i} 
                        key={i} 
                        info={items[i]} />
                ) 
            })}                       
        </div>
    )
}

const mapStateToProps = ({ items, sys: { firstStart, scroll } }) => {
    return { items, firstStart, scroll }
};

export default connect(mapStateToProps, { addNewPage,  updateFirstStart, setScrollTop } )(Catalog);