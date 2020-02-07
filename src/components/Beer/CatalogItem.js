import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchItem, setScrollTop } from './redux/actions';
import { useHistory } from 'react-router-dom';

const CatalogItem = React.forwardRef(({ id, info, fetchItem, setScrollTop, catRef }, ref) => {
    
    const history = useHistory();

    const { shouldFetch, data, loading } = info;
    const { name, tagline, description, first_brewed, image_url } = data || {};    

    useEffect(()=>{
        if (shouldFetch) {
            fetchItem(id);
        }
    }, [id, shouldFetch, fetchItem ]);

    const handleShowMeMoreClick = () => {
        setScrollTop(catRef.current.scrollTop);
        history.push(`/beer/${id}`);
    }
    
    const content = loading || shouldFetch ? 'Loading...' : (<>
        <div className="title">
            <img src={image_url} alt={tagline} />
            <h3>{name}</h3>
        </div>
        <h5>{tagline}</h5>
        <p><span>First Brewed: </span>{first_brewed}</p>
        <p>{description}</p>            
        <button 
            type="button" 
            className="btn btn-outline-danger"
            onClick={handleShowMeMoreClick}
            >
            More info ...
        </button>
    </>)

    return  (
        <div ref={ref} className="catalogItem">
            {content}
        </div>
    )
})

export default connect(null, { fetchItem, setScrollTop }, null, { forwardRef: true })(CatalogItem);