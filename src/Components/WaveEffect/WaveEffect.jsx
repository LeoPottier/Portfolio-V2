import wave1 from "../../assets/border-img/1.png"
import wave2 from "../../assets/border-img/2.png"
import wave3 from "../../assets/border-img/3.png"
import './style.scss'

function WaveEffect() {
    return (
        <div className="wave-effect">
            <div className="line line-1">
                <div className="wave wave1" style={{backgroundImage: `url(${wave1})`}}></div>
            </div>
            <div className="line line-2">
                <div className="wave wave2" style={{backgroundImage: `url(${wave2})`}}></div>
            </div>
            <div className="line line-3">
                <div className="wave wave3" style={{backgroundImage: `url(${wave3})`}}></div>
            </div>
        </div>
    )
}

export default WaveEffect;