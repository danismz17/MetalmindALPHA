import React from 'react'
import './Footer.css'

const GoogleMap = () => {
    return (
        <div className="map-container">
            <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3273.633463751024!2d-56.223610584345586!3d-34.8654361803925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a1d54346b844c3%3A0x456b05e12ff23588!2sGobernador%20del%20Pino%203916%2C%2011900%20Montevideo%2C%20Departamento%20de%20Montevideo!5e0!3m2!1ses!2suy!4v1569885462688!5m2!1ses!2suy&zoom=10&streetview=false"
                width="300"
                height="200"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen=""
            ></iframe>
        </div>
    );
};


const Footer = () => {
    return (
        <>
            <footer className="footer-container">
                <div className="footer-info-container">
                    <div className="footer-info-container-block">
                        <div className="footer-bloque-logo">
                            <img src="src/public/metalmind-logo.png" alt="" />
                            <GoogleMap />

                        </div>
                        <div className="footer-bloque-nav">
                            <div className='footer-tittle-container'>
                                <h4>SECCIONES</h4>
                            </div>

                            <div className='footer-elements-container'>
                                <ul>
                                    <li>Inicio</li>
                                    <li>Sobre Nosotros</li>
                                    <li>Productos</li>
                                    <li>Nuestros Trabajos</li>
                                    <li>Contacto</li>
                                </ul>

                            </div>

                        </div>

                        <div className="footer-productos">
                            <div className='footer-tittle-container'>
                                <h4>PRODUCTOS</h4>
                            </div>

                            <div className='footer-elements-container'>
                                <ul>
                                    <li>Cilindros</li>
                                    <li>Caños</li>
                                    <li>Bridas</li>
                                    <li>Valvulas</li>
                                    <li>Mortero</li>
                                    <li>Varillas</li>
                                    <li>Arandelas</li>
                                    <li>Electricidad</li>
                                    <li>Motores</li>
                                    <li>Muebles</li>
                                    <li>Tornilleria</li>
                                    <li>Exhibidores y Estanterias</li>
                                </ul>

                            </div>

                        </div>


                        <div className="footer-contact-info">
                            <div className='footer-tittle-container'>
                                <h4>CONTACTO</h4>
                            </div>

                            <div className='footer-elements-container'>
                                <div className='contact-form'>
                                    <div className="renglon">
                                        <div className="renglon-ico">
                                            <img src="src/public/localizacion.png" alt="" />
                                        </div>
                                        <div className="renglon-text">
                                            <p>Gobernador del Pino 3916</p>
                                        </div>
                                    </div>
                                    <div className="renglon">
                                        <div className="renglon-ico">
                                            <img src="src/public/correo-electronico.png" alt="" />
                                        </div>
                                        <div className="renglon-text">
                                            <p>clientes@metalmind.com.uy</p>
                                        </div>
                                    </div>
                                    <div className="renglon">
                                        <div className="renglon-ico">
                                            <img src="src/public/telefono-inteligente.png" alt="" />
                                        </div>
                                        <div className="renglon-text">
                                            <p>23090045 / 095551356</p>
                                        </div>
                                    </div>


                                </div>

                            </div>



                        </div>

                    </div>



                </div>
                <div className="footer-derechos-container">
                    <p>todos los derechos reservados | desarrollado por <span className='e'>e</span>tri<span className='X'>X</span>code | 2023</p>
                </div>

            </footer>
        </>
    )
}

export default Footer
