import React, { useState } from 'react';
import './MockupProductList.css';
import CardListaArticulo from '../CardListaArticulo/CardListaArticulo';

const MockupProductList = ({ selectedProduct, onExit, data }) => {
    const [isVisible, setIsVisible] = useState(true);

    const handleExitClick = () => {
        setIsVisible(false);
        onExit();
    };

    // Obtén la categoría correspondiente al primer producto seleccionado
    const selectedCategory = data.categorias.find(
        (categoria) => categoria.productos.some(producto => producto.id === selectedProduct[0].id)
    );

    return (
        <>
            {isVisible && (
                <div className="blured-background">
                    <div className="mockup-card-container puff-in-center">
                        <div className='mockup-card-titulo-container'>
                            {/* Muestra el nombre de la categoría del primer producto */}
                            <h3>{selectedCategory && selectedCategory.categoria}</h3>
                            <div className='exit-btn' onClick={handleExitClick}>
                                <h3 id='exit'>X</h3>
                            </div>
                        </div>
                        <div className="list-articulos-container">
                            {selectedProduct.map((producto) => (
                                <CardListaArticulo
                                    key={producto.id}
                                    imagenProducto={producto.imagenProducto}
                                    nombreProducto={producto.nombreProducto}
                                    descripcionProducto={producto.descripcionProducto}
                                    datoProducto={producto.datoProducto}
                                    infoDatoProducto={producto.infoDatoProducto}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default MockupProductList;
