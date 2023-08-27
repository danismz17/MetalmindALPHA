import React from 'react'
import './SobreNosotros.css'
import FeaturesCards from '../FeaturesCards/FeaturesCards'

const SobreNosotros = () => {
    return (
        <>
            <div className="SobreNosotros-container">

                <div className="SobreNosotros-text-container">
                    <h2>metalmind</h2>
                    <p>Antiguamente conocida como Rosfin SA. TASA, un referente en la industria con más de tres décadas de experiencia arraigada en Pueblo Victoria (La Teja). Somos apasionados por dar forma a tus ideas en metal, y nuestra dedicación a la calidad y la innovación nos distingue.

                        Nuestra Promesa:

                        Legado de Calidad: Con más de 35 años de experiencia, entregamos productos metálicos de la más alta calidad que perduran en el tiempo.

                        Innovación Constante: Utilizamos tecnología de vanguardia y procesos innovadores para transformar tus conceptos en realidades metálicas.

                        Enfoque Personalizado: Colaboramos estrechamente contigo para entender tus necesidades y proporcionar soluciones a medida que se adapten perfectamente.

                        Únete a nosotros en nuestra misión de forjar un futuro sólido y metálico. Juntos, moldearemos el mañana.

                        Metalurgia Victoria: Forjando Legado, Creando Metal.
                    </p>
                </div>
                <div className="SobreNosotros-image-container">
                    {/* <img src="images/metalurgica.JPG" alt="" /> */}
                    <img src="images/metalmind-retro.png" alt="" />
                </div>
            </div>

            <div className="SobreNosotros-ico-container">

                <FeaturesCards
                    ico="images/calendar.png"
                    titulo="Trayectoria"
                    descripcion="+35 años en el mercado"
                />

                <FeaturesCards
                    ico="images/ideas.png"
                    titulo="Compromiso"
                    descripcion="Trabajos garantizados"
                />

                <FeaturesCards
                    ico="images/diseño.png"
                    titulo="Creatividad"
                    descripcion="Soluciones innovadoras"
                />

            </div>
        </>
    )
}

export default SobreNosotros
