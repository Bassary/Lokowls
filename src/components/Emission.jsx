import VideoCard from "./VideoCard";
import './style/main.scss'
import Info from "./Info";

function Emission() {
    return (
        <section className="container-video">
            <div className="titre-h2">
                <img className="logo" src="assets/logo-emission.svg" alt="logo télé" />
                <h2>Émission</h2>
            </div>
            <div className="container-video__flex">
                <VideoCard
                    link={"https://www.youtube.com/watch?v=FFvaOzy_4YQ&t=1968s&ab_channel=MadeInGora"}
                    title="MadeInGora - Le Trek Maudit"
                    description="Twitch - 2h23 - 2025"
                    className="video-card__content"
                    children={
                        <Info
                            imageSrc="assets/trek-capture.png"
                            imageAlt="emmission twitch madeingora le trek maudit"
                            information="Le Trek Maudit est la seconde itération de nos Murder Party interactives en direct réalisées avec l’autrice Lisa Dupuis.
                            L’histoire se déroule au milieu d’une jungle maudite, où un groupe d’aventuriers se retrouve coincé avec une étrange jeune femme,
                            qui a l’air d’en savoir plus qu’elle ne le laisse paraître… Ce projet était ambitieux dès le départ :
                            reproduire une jungle en studio avec de très faibles moyens fut un défi. Nous avons eu accès à un studio grâce à l’aide de Knack Knack production.
                            Pour l’univers graphique, j’ai été aidé par l’illustratrice Sibylle Guyot :
                            nous avons réalisé un générique et tout un plan de communication sur les réseaux pour présenter l’émission. Le jour J,
                            il m’a fallu gérer une petite équipe de régisseurs pour guider les mouvement de caméra, les changements de voix, les arrivées d’éléments graphiques,
                            les changements de lumière, etc. Le Trek est un projet très complet dont tous les collaborateurs sont particulièrement fiers."
                            poste="Montage vidéo / Création de DA / Univers graphique / Création de décors / Réa / Régie en direct / Motion design"
                        />}
                >
                </VideoCard>
                <VideoCard
                    link={"https://youtu.be/KzbiE8I9ruA?si=p11ZLD9ujfY0_hl1"}
                    title="MadeInGora - Le Dilemme"
                    description="Twitch - 2h38 - 2024"
                    className="video-card__content"
                    children={
                        <Info
                            imageSrc="assets/dilemme-capture.png"
                            imageAlt=""
                            information="Ce projet est la première Murder Party interactive en direct sur Twitch, diffusée sur la chaîne MadeInGora.
                                            Le principe repose sur un univers immersif dans lequel le spectateur fait partie intégrante des décisions.
                                            Pour cette première édition, l’univers du Dilemme se passe en 2049, dans une Europe sur le point de basculer à cause d'une loi peu éthique, votée dans l'ombre par des élus corrompus.
                                            Mais un hacker décide d'intervenir, filmant clandestinement la réunion pour la diffuser dans tout le continent. Ainsi le spectateur devient citoyen et peut faire entendre sa voix pour changer l'histoire...
                                            Ce projet a été monté avec une petite équipe, soutenue par la boîte de production Isimara qui nous a mis à disposition leur studio. L'autrice Lisa Dupuis a écrit toute l'histoire;
                                            j'ai travaillé sur le visuel, l'implication du public durant le live ainsi que les modules audiovisuel défilant pendant le jeu afin de rendre l'univers palpable.
                                            Pour paramétrer le tout j'ai utilisé le logiciel Vmix, qui permet de synchroniser les lumières, les effets visuels, le jingle et le décor. Le jour de la diffusion,
                                            j'étais aux commandes dans la régie gérant les changements de caméra et le lancement de tous les événements."
                            poste="Montage Vidéo / Création de DA / Univers graphique / Motion design / Réa / Régie en direct"
                        />}
                >
                </VideoCard>
            </div>
            <img className="bulle-dialogue" src="assets/bulle-2.svg" alt="bulle dialogue" />
        </section>
    )
}

export default Emission;