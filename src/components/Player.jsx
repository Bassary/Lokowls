import ReactPlayer from "react-player"

function Player ({videoUrl}) {

    return (
        <ReactPlayer url={videoUrl} />
    )
}