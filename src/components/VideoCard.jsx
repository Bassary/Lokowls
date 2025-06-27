import Player from "./Player"
import './style/VideoCard.scss'

function VideoCard({title, description, link}) {
    return (
        <div className="video-card">
            <Player videoUrl={link}/>
            <div className="video-card__text">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <button>Plus d'info</button>
        </div>
        
    )
}

export default VideoCard