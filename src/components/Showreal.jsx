import ReactPlayer from "react-player";
import './style/Showreal.scss'

function Showreal() {
    return (
        <section className="showreal">
            <h2 className="showreal__title">Montage - Motion Design - Réalisation - Régie</h2>
            <ReactPlayer url="https://www.youtube.com/watch?v=Gr0iwYyJanQ&ab_channel=St%C3%A9phaneD.S.O" width="100%" height="auto" />
        </section>

    )
}

export default Showreal;