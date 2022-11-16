import facebook from '../assets/img/facebook.png'
import twitter from '../assets/img/twitter.png'
import youtube from '../assets/img/youtube.png'
import spotify from '../assets/img/spotify.png'

import Img from '../atoms/Img'
function SocialMedia () {
    return (
    <div className='socialMedia'>
            <a href='https://www.facebook.com/TrovaContemporanea'><Img src={facebook} className="icons"></Img></a>
            <a href=''><Img src={twitter} className="icons"></Img></a>
            <a href='https://www.youtube.com/user/camachocristian'><Img src={youtube} className="icons"></Img></a>
            <a href='https://open.spotify.com/artist/0hFkGfdq2zK5sb79LWC6LB'><Img src={spotify} className="icons"></Img></a>
    </div>
    )
}

export default SocialMedia;