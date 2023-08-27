import React from 'react';

const CardListaArticulo = (props) => {
  return (
    <div className="articulo-renglon">
      <div className="product-image-container">
        <img src={props.imagenProducto} alt="Producto" />
      </div>
      <div className="product-name-container">
        <div className="name-container">
          <h4>{props.nombreProducto}</h4>
        </div>

        <div className="description-product-container">
          <p>{props.descripcionProducto}</p>
        </div>
      </div>
      <div className="diametros-container">
        <span>{props.datoProducto}</span>
        <p>{props.infoDatoProducto}</p>
      </div>
    </div>
  );
}

export default CardListaArticulo;
