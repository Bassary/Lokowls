
import VideoCard from "./VideoCard";
import './style/ClipCourt.scss'

function ClipCourt (){
    return (
        <section className="clip-court">
                <h2>Clip & Court-Métrage</h2>
                <div className="line"></div>
            <div className="clip-court__flex">
                <VideoCard
                    link={"https://www.youtube.com/watch?v=yZwhMv_Xqug&ab_channel=SEXBLOOD"}
                    title="Sexblood - I Talk to The Dead"
                    description="Clip - 3:14 - 2025"
                ></VideoCard>
                <VideoCard
                    link={"https://www.youtube.com/watch?v=UBaHH_gvdJc&ab_channel=St%C3%A9phaneD.S.O"}
                    title="No Logo No Loco"
                    description="Clip - 3:29 - 2023"
                ></VideoCard>
                <VideoCard
                    link={"https://www.youtube.com/watch?v=p1FCF72m_qg&ab_channel=St%C3%A9phaneD.S.O"}
                    title="Pluie de Pixel"
                    description="Clip - 2:57 - 2023">
                </VideoCard>
                <VideoCard
                    link={"https://www.youtube.com/watch?v=_mgDzsFU4ME&ab_channel=St%C3%A9phaneD.S.O"}
                    title="La Couleur du Ciel"
                    description="Court-métrage - 10:47 - 2023">
                </VideoCard>
                <VideoCard 
                    link={"https://www.youtube.com/watch?v=Zsq6g4a8DIo&ab_channel=St%C3%A9phaneD.S.O"}
                    title="La Couleur du Ciel"
                    description="Making-Off - 14:57 - 2023">
                </VideoCard>
                <div className="container-img">
                    <img src="../src/assets/bulle-1.svg"/>
                </div>
                
            </div>
        </section>

    )
}

export default ClipCourt;