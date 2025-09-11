import ReactPlayer from "react-player"
import './style/main.scss'

function Player({ videoUrl }) {

    return (
        <div className="player">
            <ReactPlayer
                url={videoUrl}
                width="100%"
                height="auto"
                controls
                config={{
                    youtube: {
                        playerVars: { enablejsapi: 1, origin: window.location.origin },
                        embedOptions: { host: "https://www.youtube-nocookie.com" }
                    }
                }}
            />
        </div>
    )
}

export default Player