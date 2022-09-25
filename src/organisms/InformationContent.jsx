import ImgAndText from '../molecules/ImgAndText';

import image1 from '../assets/img/image1.png'

const ImageAndTextContent = {
    src: image1,
    text: "Hola"
}

function InformationContent () {
    return (
    <div className='MainInformation'>
        <h2>Hello</h2>
        <hr />

        <div className='imagesAndTextes'> 
        <ImgAndText src={ImageAndTextContent.src} text={ImageAndTextContent.text}></ImgAndText>
        </div>
    </div>
    )
}

export default InformationContent