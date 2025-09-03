
import Modal from "./Modal"
import Player from "./Player"
import './style/VideoCard.scss'




function VideoCard({ title, description, link, children, className }) {


    return (
        <div className="video-card">
            <Player videoUrl={link} className="video-player" />
            <div className={className}>
                <div className="video-card__content--txt">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                <Modal btnText="Plus d'Info" title="Fiche Technique" className="modal__content modal__padding" btnClassName={"btn-info"} children={children} />
            </div>

        </div>

    )
}

export default VideoCard