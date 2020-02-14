import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchItem } from './redux/actions';
import { useHistory } from 'react-router-dom';
import Spinner from './Spinner';
import ErrorIndicator from './ErrorIndicator';

const CatalogItem = React.forwardRef(({ id, info, fetchItem }, ref) => {
    
    const history = useHistory();

    const { shouldFetch, data, loading, error } = info;
    const { name, tagline, description, first_brewed, image_url } = data || {};    

    useEffect(()=>{
        if (shouldFetch) {
            fetchItem(id);
        }
    }, [id, shouldFetch, fetchItem ]);

    const handleShowMeMoreClick = () => {
        if (data) {            
            history.push(`/beer/${id}`);
        }
    };
    
    const content = error ? <ErrorIndicator error={error}/> : loading || shouldFetch ? <Spinner/> : (<>
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
            >
            More info ...
        </button>
    </>)

    return  (
        <div ref={ref} className="catalogItem" onClick={handleShowMeMoreClick}>
            {content}
        </div>
    )
})

export default connect(null, { fetchItem }, null, { forwardRef: true })(CatalogItem);