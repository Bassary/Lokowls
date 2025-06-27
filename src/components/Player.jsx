import ReactPlayer from "react-player"

function Player ({videoUrl}) {

    return (
        <ReactPlayer url={videoUrl} controls width="600px" height="337px" />
    )
}

export default Player