import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

const ItemPage = ({ id, data }) => {
    const history = useHistory();    
    
    const { name, tagline, description, first_brewed, image_url, abv, ibu, target_fg,
        target_og, ebc, srm, ph, attenuation_level, food_pairing, brewers_tips,
        contributed_by, ingredients: { malt, hops, yeast } } = data || {};

    // console.log(malt, hops, yeast);

    const goBackHandler = () => {
        history.goBack();
    }

    return (
        <Row className="itemPage">            
            <Col md={2} className="img">
                <img src={image_url} alt={tagline} />
            </Col>
            <Col md={10} className="content">
                <h3>{name}</h3>
                <h5>{tagline}</h5>
                <div><span>First Brewed: </span>{first_brewed}</div>
                <p>abv: {abv}, ibu: {ibu}, target_fg: {target_fg}, target_og: {target_og},
                ebc: {ebc}, srm: {srm}, ph: {ph}, attenuation_level: {attenuation_level}</p>
                <div><h4>Description: </h4><p>{description}</p></div>
                <div><h4>Food Pairing:</h4>
                    <ul>
                        {food_pairing.map(e=><li key={e}>{e}</li>)}
                    </ul>
                </div>
                <h4>Ingredients: </h4>
                <div className="ing">
                    <div><h6>Malt:</h6>
                        <ul>
                            {malt.slice(0,6).map((e,i)=><li key={i}>{e.name} {e.amount.value} {e.amount.unit}</li>)}
                        </ul>
                    </div>
                    <div><h6>Hops:</h6>
                        <ul>
                            {hops.slice(0,6).map((e,i)=><li key={i}>{e.name}  {e.amount.value} {e.amount.unit}</li>)}
                        </ul>
                    </div>
                    <div><h6>Yeast:</h6>
                        <ul>
                            <li>{yeast}</li>
                        </ul>
                    </div>
                </div>
                <div><h4>Brewers tips: </h4><p>{brewers_tips}</p></div>
                <p>Contributed by: {contributed_by}</p>            
                <button 
                    type="button" 
                    className="btn btn-outline-danger"
                    onClick={goBackHandler}
                    >
                    Go back ...
                </button>
            </Col>            
        </Row>
    )
}

const mapStateToProps = (state, { id }) => {
    return {
        data: state.items[id].data
    }
}

export default connect(mapStateToProps)(ItemPage);