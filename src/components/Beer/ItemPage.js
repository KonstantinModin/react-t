import React from 'react';
import { useParams } from "react-router-dom";
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';

const ItemPage = ({ id, data }) => {   
    const { name, tagline, description, first_brewed, image_url, abv, ibu, target_fg,
        target_og, ebc, srm, ph, attenuation_level, food_pairing, brewers_tips,
        contributed_by, ingredients:{ malt, hops, yeast } } = data || {};    
    
    console.log( malt, hops, yeast );

    return (
        <Row className="itemPage">            
            <Col md={2} className="img">
                <img src={image_url} alt={tagline} />
            </Col>
            <Col md={10} className="content">
                <h3>{name}</h3>
                <h5>{tagline}</h5>
                <p><span>First Brewed: </span>{first_brewed}</p>
                <p>abv: {abv}, ibu: {ibu}, target_fg: {target_fg}, target_og: {target_og},
                ebc: {ebc}, srm: {srm}, ph: {ph}, attenuation_level: {attenuation_level}</p>
                <p>{description}</p>
                <div>Food Pairing:
                    <ul>
                        {food_pairing.map(e=><li key={e}>{e}</li>)}
                    </ul>
                </div>
                <p>Brewers tips: {brewers_tips}</p>
                            
                <button type="button" className="btn btn-outline-danger">Go back ...</button>
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