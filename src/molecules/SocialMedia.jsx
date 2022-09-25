import facebook from '../assets/img/facebook.png'
import twitter from '../assets/img/twitter.png'
import youtube from '../assets/img/youtube.png'
import spotify from '../assets/img/spotify.png'

import Img from '../atoms/Img'
function SocialMedia () {
    return (
    <div className='socialMedia'>
            <Img src={facebook} className="icons"></Img>
            <Img src={twitter} className="icons"></Img>
            <Img src={youtube} className="icons"></Img>
            <Img src={spotify} className="icons"></Img>
    </div>
    )
}

export default SocialMedia;