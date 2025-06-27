import VideoCard from "./VideoCard";

function Emission () {
    return (
        <section className="clip-court">
            <h2>Émission</h2>
            <div className="clip-court__flex">
                <VideoCard 
                    link={"https://www.youtube.com/watch?v=FFvaOzy_4YQ&t=1968s&ab_channel=MadeInGora"}
                    title="MadeInGora - Le Treck Maudit"
                    description="Twitch - 2h23 - 2025">
                </VideoCard>
                <VideoCard 
                    link={"https://youtu.be/KzbiE8I9ruA?si=p11ZLD9ujfY0_hl1"}
                    title="MadeInGora - Le Dilemme"
                    description="Twitch - 2h38 - 2024">
                </VideoCard>
            </div>
            <div>
                <img src="./src/assets/bulle-2.svg"/>
            </div>
        </section>
    )
}

export default Emission;