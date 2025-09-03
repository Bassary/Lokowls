import ReactPlayer from "react-player"
import './style/main.scss'

function Player({ videoUrl }) {

    return (
        <div className="player">
            <ReactPlayer url={videoUrl} width="100%" height="auto" controls />
        </div>
    )
}

export default Player