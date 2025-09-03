import GifController from "./GifController"
import './style/main.scss'

function Animation() {
    return (
        <section className="container-video">
            <div className="titre-h2">
                <img className="logo" src="assets/logo-animation.svg" alt="logo fusée" />
                <h2>Animation</h2>
            </div>
            <div className="animation__flex">

                <div className="animation-container-video__flex container-video__margin">
                    <GifController
                        imageStatic={"assets/gif/sexblood-1.png"}
                        gifAnimated={"assets/gif/sexblood-1.gif"}>
                    </GifController>
                    <GifController
                        imageStatic={"assets/gif/sexblood-2.png"}
                        gifAnimated={"assets/gif/sexblood-2.gif"}>
                    </GifController>
                    <GifController
                        imageStatic={"assets/gif/sans-perdre-le-file.png"}
                        gifAnimated={"assets/gif/sans-perdre-le-file.gif"}>
                    </GifController>
                    <GifController
                        imageStatic={"assets/gif/collision.png"}
                        gifAnimated={"assets/gif/collision.gif"}>
                    </GifController>
                    <GifController
                        imageStatic={"assets/gif/trek-1.png"}
                        gifAnimated={"assets/gif/trek-1.gif"}>
                    </GifController>
                    <GifController
                        imageStatic={"assets/gif/dilemme-2.png"}
                        gifAnimated={"assets/gif/dilemme-2.gif"}>
                    </GifController>
                    <GifController
                        imageStatic={"assets/gif/steve-love.png"}
                        gifAnimated={"assets/gif/steve-love.gif"}>
                    </GifController>
                    <GifController
                        imageStatic={"assets/gif/rny2.png"}
                        gifAnimated={"assets/gif/rny2.gif"}>
                    </GifController>
                    <GifController
                        imageStatic={"assets/gif/madein.png"}
                        gifAnimated={"assets/gif/madein.gif"}>
                    </GifController>
                    <GifController
                        imageStatic={"assets/gif/dilemme-1.png"}
                        gifAnimated={"assets/gif/dilemme-1.gif"}>
                    </GifController>
                    <GifController
                        imageStatic={"assets/gif/trek-2.png"}
                        gifAnimated={"assets/gif/trek-2.gif"}>
                    </GifController>
                    <GifController
                        imageStatic={"assets/gif/explorer-gen-1.png"}
                        gifAnimated={"assets/gif/explorer-gen-1.gif"}>
                    </GifController>
                    <GifController
                        imageStatic={"assets/gif/gora.png"}
                        gifAnimated={"assets/gif/gora.gif"}>
                    </GifController>
                    <GifController
                        imageStatic={"assets/gif/gora-cook.png"}
                        gifAnimated={"assets/gif/gora-cook.gif"}>
                    </GifController>
                    <GifController
                        imageStatic={"assets/gif/rny1.png"}
                        gifAnimated={"assets/gif/rny1.gif"}>
                    </GifController>
                    <GifController
                        imageStatic={"assets/gif/trop-cool.png"}
                        gifAnimated={"assets/gif/trop-cool.gif"}>
                    </GifController>
                    <GifController
                        imageStatic={"assets/gif/rond-lok.png"}
                        gifAnimated={"assets/gif/rond-lok.gif"}>
                    </GifController>
                    <GifController
                        imageStatic={"assets/gif/zinde-jour.png"}
                        gifAnimated={"assets/gif/zinde-jour.gif"}>
                    </GifController>
                    <GifController
                        imageStatic={"assets/gif/zinde-horreur.png"}
                        gifAnimated={"assets/gif/zinde-horreur.gif"}>
                    </GifController>
                    <GifController
                        imageStatic={"assets/gif/zinde-nuit.png"}
                        gifAnimated={"assets/gif/zinde-nuit.gif"}>
                    </GifController>
                    {/* <div className="container-video__flex--div">
                    </div> */}
                </div>
            </div>
        </section>
    )
}

export default Animation