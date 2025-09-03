import VideoCard from "./VideoCard";
import Info from "./Info";
import './style/main.scss'
import Modal from "./Modal";

function MotionDesign() {
    return (
        <section className="container-video">
            <div className="titre-h2">
                <img className="logo" src="assets/logo-motion-design.svg" alt="logo cible" />
                <h2>Motion Design d'Entreprise</h2>
            </div>
            <div className="container-video__flex">
                <VideoCard
                    link={"https://youtu.be/YiIoDl3e2ck?si=Atm5fz6_Fr6JIiqY"}
                    title="Financement des Formation"
                    description="Comment obtenir une formation financer - 2025 - 1:52"
                    className="video-card__content"
                    children={
                        <Info
                            imageSrc="assets/nojo-capture.png"
                            imageAlt="representation d'un motion graphique dans le cadre d'une fomration"
                            information=" J'ai eu l'occasion, dans un précédent emploi,
                            de donner plusieurs formations en montage vidéo.
                            C'est dans ce contexte que j'ai dû réaliser des vidéos expliquant de manière ludique et accessible les droits et méthodes de financement.
                            Les mouvements et formes n’ont pas à être complexes, au contraire, ce genre de vidéo étant faite pour une accessibilité totale."
                            poste="Motion graphics"
                        />
                    }
                >
                </VideoCard>
                <VideoCard
                    link={"https://youtu.be/EJAzHBphVek?si=Ga96kN0Bao0JerG7"}
                    title="Formation en Entreprise"
                    description="Comment se former en entreprise - 2025 - 2:29"
                    className="video-card__content modal-off"
                >
                </VideoCard>
            </div>
            <img className="bulle-dialogue" src="assets/bulle-3.svg" alt="bulle dialogue" />
        </section>
    )
}

export default MotionDesign