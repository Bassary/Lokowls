
import VideoCard from "./VideoCard";
import './style/main.scss'
import Info from "./Info";
import { useState } from "react";

function ClipCourt() {
    const [isMoreInfo, setIsMoreInfo] = useState(false)

    const toggleInfo = () => {
        setIsMoreInfo(!isMoreInfo)

    }

    return (
        <section className="container-video">
            <div className="titre-h2">
                <img className="logo" src="assets/logo-court-metrage.svg" alt="logo clap cinéma" />
                <h2>Clip & Court-Métrage</h2>
            </div>
            <div className="container-video__flex">
                <VideoCard
                    link={"https://www.youtube.com/watch?v=yZwhMv_Xqug&ab_channel=SEXBLOOD"}
                    title="I Talk to The Dead - Sexblood"
                    description="Clip - 3:14 - 2025"
                    className="video-card__content"
                    children={
                        <Info
                            imageSrc="assets/sexblood-capture.png"
                            imageAlt="clip I talk to the dead du group Sexblood"
                            information="Pour réaliser ce clip du groupe gothique Sexblood, j'ai dû ruser afin de tout faire dans les temps. Avec 2 autres personnes, nous avons d’abord anticipé les 42 plans prévus en utilisant des marquages au sol avant l’arrivée des musiciens. À partir de là, nous avions toute la matière nécessaire pour tourner et s’amuser au montage afin de créer une atmosphère gothique et sanglante.
                            Je tenais vraiment à avoir une esthétique dark et expressionniste, avec un noir et blanc contrasté, rehaussé de pointes de rouge sur des visages cadavériques. "
                            poste="Réalisation et montage"
                        />}
                ></VideoCard>
                <VideoCard
                    link={"https://www.youtube.com/watch?v=UBaHH_gvdJc&ab_channel=St%C3%A9phaneD.S.O"}
                    title="No Loco No Logo - Benoit Vincent"
                    description="Clip - 3:29 - 2023"
                    className="video-card__content"
                    children={
                        <Info
                            imageSrc="assets/no-loco-capture.png"
                            imageAlt="clip no loco no logo de Benoit Vincent"
                            information=" Pour ce clip, j'ai reçu comme instruction de ne pas montrer l'artiste chanter.
                            Le budget très réduit nous a guidé vers du matériel de récupération.
                            L’idée était de jouer avec les ordures, les choses que l’on ne veut plus, qu’on laisse traîner,
                            pour parler des dérives du capitalisme et de la surconsommation.
                            Ce que j'aime avec ce genre de projet, c'est de savoir qu'une contrainte budgétaire peut devenir une force narrative,
                            en l'occurrence en n’utilisant que des objets récupérés en déchetterie."
                            poste="Réalisation et montage"
                        />}
                ></VideoCard>
                <VideoCard
                    link={"https://www.youtube.com/watch?v=_mgDzsFU4ME&ab_channel=St%C3%A9phaneD.S.O"}
                    title="La Couleur du Ciel"
                    description="Court-métrage - 10:47 - 2023"
                    className="video-card__content"
                    children={
                        <Info
                            imageSrc="assets/couleur-ciel-capture.png"
                            imageAlt="court métrage la couleur du ciel"
                            information="Ce court métrage fait partie des premières expériences qui m'ont permis de faire mes armes. Encore en études durant ce tournage, j'ai d'abord été chef opérateur son pour finir sur le banc de montage du précédent monteur. Avec ce court métrage j'ai dû m'adapter vite à tous les imprévus et j'ai compris la complexité du facteur humain qui peut faire basculer un projet.
                            C'est en partie pour cette raison qu'aujourd'hui j’apporte une grande importance à la bonne cohésion d'une équipe. "
                            poste="Chef opérateur son et monteur"
                        />}
                >
                </VideoCard>
                <div className="container-img">
                    <img className="bulle" src="assets/bulle-1.svg" alt="bulle dialogue" />
                    <img className="bulle-v2" src="assets/bulle-1-v2.svg" alt="bulle dialogue" />
                </div>
                {isMoreInfo && (
                    <div className="container-video__flex">
                        <VideoCard
                            link={"https://www.youtube.com/watch?v=Zsq6g4a8DIo&ab_channel=St%C3%A9phaneD.S.O"}
                            title="La Couleur du Ciel"
                            description="Making-Off - 14:57 - 2023"
                            className="video-card__content modal-off"
                        >
                        </VideoCard>
                        <VideoCard
                            link={"https://www.youtube.com/watch?v=p1FCF72m_qg&ab_channel=St%C3%A9phaneD.S.O"}
                            title="Pluie de Pixel - Benoit Vincent"
                            description="Clip - 2:57 - 2023"
                            className="video-card__content"
                            children={
                                <Info
                                    imageSrc="assets/pixel-capture.png"
                                    imageAlt="clip pluie de pixel de Benoit Vincent"
                                    information="Pluie de Pixel est le premier clip vidéo que j'ai réalisé pour l’artiste Benoit Vincent. Pour créer ce rendu, j'ai utilisé un rétroprojecteur sur la danseuse, pour ensuite alterner avec des doubles expositions du musicien, créées sur After Effect.
                                        J'ai une certaine tendresse à revoir ces projets de début de carrière, qui me rappellent que la simplicité peut être une belle source de créativité."
                                    poste="Réalisation et montage"
                                />}
                        ></VideoCard>
                        <VideoCard
                            link={"https://youtu.be/BAGoZL8gHfU?si=2qxNcbgyYn4n3o9e"}
                            title="La Chute - Alexane Nylon"
                            description="Court-métrage - 20:59 - 2022"
                            className="video-card__content"
                            children={
                                <Info
                                    imageSrc="assets/chute-capture.png"
                                    imageAlt="court-métrage la chute de Alexane Nylon"
                                    information="La Chute est un court métrage d’Alexane Nylon racontant l’histoire d’une danseuse classique subissant une chute tragique.
                                    Le projet était très rythmé : les lieux de tournage pouvaient aller du petit bureau où il est difficile de naviguer au grand gymnase où il faut gérer un écho permanent.
                                    C’est lors de ce projet que j’ai appris à savoir où me placer pour obtenir le meilleur son sans gêner d’autres techniciens."
                                    poste="Chef opérateur son"
                                />}
                        ></VideoCard>
                        <VideoCard
                            link={"https://youtu.be/poIUYuvHAgY?si=2k8Lecsi_wWwcDvs"}
                            title="Diamant - Paul Bour"
                            description="Court-métrage - 2:20 - 2022"
                            className="video-card__content"
                            children={
                                <Info
                                    imageSrc="assets/diamant-capture.png"
                                    imageAlt="court-métrage diamant de Paul Bour"
                                    information="Présenté au Nikon Festival, Diamant est un court métrage de body horror réalisé par Paul Bour,
                                    racontant la vengeance de 3 sorcières sur un agresseur sexuel. Ce genre cinématographique suggère des évènements gores nécessitant une grande quantité de bruitages,
                                    ce qui m’a permis de m’essayer au métier de bruiteur lors de la post-production."
                                    poste="Chef opérateur son et monteur son"
                                />}
                        ></VideoCard>
                    </div>
                )}

            </div>
            <button className="main-btn more-info-btn" onClick={toggleInfo}>
                {isMoreInfo ? "Afficher Moins" : "Afficher Plus"}
            </button>
        </section>

    )
}

export default ClipCourt;