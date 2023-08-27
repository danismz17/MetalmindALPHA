import React from 'react';
import './FeaturesCards.css'

const FeaturesCards = (props) => {
    return (
        <>
            <div className="featuresCards-card">
                <div className="featuresCards-ico-container">
                    <img src={props.ico} alt="" />
                </div>
                <div className="featuresCards-text-container">
                    <div className="featuresCards-text-container-titulo">
                        <h3>{props.titulo}</h3>
                    </div>
                    <div className="featuresCards-text-container-descripcion">
                        <h4>{props.descripcion}</h4>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FeaturesCards;
