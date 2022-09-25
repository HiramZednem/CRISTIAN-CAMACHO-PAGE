import coverPhoto from '../assets/img/coverphoto.png'

import '../assets/styles/ContentImage.css'
import Button from '../atoms/Button';
import Img from '../atoms/Img';

function ContentImage(){
    return (
        <div className='content'>
            <Img src={coverPhoto} className='coverPhoto'></Img>

            
            <div className="divButton">
            <Button content='Escucha Mi Musica'></Button>
            </div>
        </div>
    );
}

export default ContentImage;