import React, { useState } from 'react';
import './Productos.css';
import ProductCards from '../ProductCards/ProductCards';
import { motion, useAnimation } from "framer-motion";
import MockupProductList from '../MockupProductList/MockupProductList';
import data from '../../src/data/data.json';

const productosCardContainer = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2,
        },
    },
};

export const Productos = () => {
    const [hasLoaded, setHasLoaded] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const controls = useAnimation();

    const handleScroll = async () => {
        if (!hasLoaded) {
            const scrollPosition = window.scrollY;
            const elementPosition = document.querySelector('.productos-container').offsetTop;

            if (scrollPosition > elementPosition - window.innerHeight / 2) {
                await controls.start("visible");
                setHasLoaded(true);
            }
        }
    };

    const handleProductClick = (productName) => {
        console.log("Producto seleccionado:", productName); 
        console.log(`Seleccionaste el producto: ${productName}`);
        
        const selectedCategory = data.categorias.find(
            (categoria) => categoria.categoria === productName
        );
        
        if (selectedCategory) {
            console.log("Selected Category:", selectedCategory);
            setSelectedProduct(selectedCategory.productos);
        }
    };
    
    
    
    
    
    

    const handleExitMockup = () => {
        setSelectedProduct(null);
    };

    React.useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [hasLoaded]);

    return (
        <div id='Productos' className="productos-container">
            <div className="productos-titulo-container">
                <h2>PRODUCTOS</h2>
            </div>

            <motion.div
                className="productos-card-container"
                initial="hidden"
                animate={controls}
                variants={productosCardContainer}
            >
                <ProductCards
                    imagen="images/cilindros.png"
                    item="Cilindros"
                    descripcion="Amplia variedad de mm"
                    onClick={() => handleProductClick("Cilindros")}
                />
                <ProductCards
                    imagen="images/caños.png"
                    item="Caños"
                    descripcion="Diferentes calibres y materiales"
                    onClick={() => handleProductClick("Caños")}
                />
                <ProductCards
                    imagen="images/flanger.png"
                    item="Bridas"
                    descripcion="Juego completo o piezas individuales"
                    onClick={() => handleProductClick("Bridas")}
                />
                <ProductCards
                    imagen="images/valvulas.png"
                    item="Válvulas"
                    descripcion="para albañileria, mecanica, entre otros"
                    onClick={() => handleProductClick("Válvulas")}
                />
                <ProductCards
                    imagen="images/mortero.png"
                    item="Mortero"
                    descripcion="Juego completo o por pieza"
                    onClick={() => handleProductClick("Mortero")}
                />
                <ProductCards
                    imagen="images/varillas.png"
                    item="Varillas"
                    descripcion="Diferente calibre, longitud y terminacion"
                    onClick={() => handleProductClick("Varillas")}
                />
                <ProductCards
                    imagen="images/arandela.png"
                    item="Arandelas"
                    descripcion="Amplia variedad de mm y materiales"
                    onClick={() => handleProductClick("Arandelas")}
                />
                <ProductCards
                    imagen="images/electricidad.png"
                    item="Electricidad"
                    descripcion="Cajas electricas, ductos, centrales, etc"
                    onClick={() => handleProductClick("Electricidad")}
                />
                <ProductCards
                    imagen="images/tapadecilindro.png"
                    item="Motores"
                    descripcion="Copa de motor, tapa de junta, etc"
                    onClick={() => handleProductClick("Motores")}
                />
                <ProductCards
                    imagen="images/muebles.png"
                    item="Muebles"
                    descripcion="Interior y exterior, terminaciones en madera o metal"
                    onClick={() => handleProductClick("Muebles")}
                />
                <ProductCards
                    imagen="images/tornilleria.png"
                    item="Tornilleria"
                    descripcion="Diferentes pulgadas"
                    onClick={() => handleProductClick("Tornilleria")}
                />
                <ProductCards
                    imagen="images/estanteria.png"
                    item="Exhibidores y Estanterias"
                    descripcion="Diseños a medida, materiales a eleccion"
                    onClick={() => handleProductClick("Estanterias")}
                />

            </motion.div>

            {selectedProduct && (
                <MockupProductList
                selectedProduct={selectedProduct}
                data={data} 
                onExit={handleExitMockup}
                />
            )}

        </div>
    );
};
