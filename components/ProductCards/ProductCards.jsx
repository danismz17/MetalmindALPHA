import React, { useState } from 'react';
import { motion } from "framer-motion";
import './ProductCards.css';

const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
    },
};

const ProductCards = (props) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleClick = () => {
        props.onClick(props.item); // Llama a la función onClick pasada como prop
    };

    return (
        <motion.div
            variants={item}
            className="product-card-container"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick} // Agrega el manejo del clic
        >
            <div 
                className={`product-card-image-container ${isHovered ? 'kenburns-left' : ''}`}
            >
                <img src={props.imagen} alt="Product" />
            </div>

            <div className="product-card-text-container">
                <h4>{props.item}</h4>
                <p>{props.descripcion}</p>
                <h6>ver catálogo 🡆</h6>
            </div>
        </motion.div>
    );
};

export default ProductCards;
