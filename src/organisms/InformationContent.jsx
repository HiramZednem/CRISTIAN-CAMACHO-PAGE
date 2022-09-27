import ImgAndText from '../molecules/ImgAndText';

import image1 from '../assets/img/image1.png'
import image2 from '../assets/img/image2.png'
import image3 from '../assets/img/image3.png'
import image4 from '../assets/img/image4.png'
import image5 from '../assets/img/image5.png'
import image6 from '../assets/img/image6.png'

import '../assets/styles/InformationContent.css'

const ImageAndTextContent = [
    {
        src: image1,
        text: "Dibujar algo que proviene de la mente, del mundo de las ideas... la realidad es un problema"
    },
    {
        src: image2,
        text: 'El nuevo tema y videoclip: "El vértigo de las golondrinas". ¡Ya esta en todas las plataformas digitales, no te lo pierdas!'
    },
    {
        src: image3,
        text: 'El trovador Cristian Camacho, anunciando su tocada en el Ex-convento de Santo Domingo en San Cristóbal de Las Casas, Chiapas; En el marco del festival artístico: "Encuentro y reflexión".'
    },
    {
        src: image4,
        text: "Beatriz Aurora Castedo es, sin duda, una de las artistas plásticas más importantes del movimiento zapatista; su obra, aparte de ayudar a juntar fondos para los Caracoles, ha llegado a todos los rincones del mundo."
    },
    {
        src: image5,
        text: "Presentación en la Región Puente del Municipio Autónomo Lucio Cabañas del Caracol IV de Morelia, en Chiapas"
    },
    {
        src: image6,
        text: 'En el Museo "La Telaraña", en Oaxaca, como invitado del gran pintor oaxaqueño Alejandro Santiago'
    },
]

function InformationContent () {
    return (
    <div className='mainInformation'>
        <h2>Mi Vida Artistica</h2>
        <div className='line'></div>

        <div className='imagesAndTextes'> 
            {ImageAndTextContent.map((content)=>{
                return ( <ImgAndText src={content.src} text={content.text}></ImgAndText> )
            })}
        </div>
    </div>
    )
}

export default InformationContent