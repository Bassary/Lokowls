import './style/main.scss'
import './style/GifController.scss'
import { useState } from "react";

function GifController({ imageStatic, gifAnimated }) {
    const [isHovered, setIsHovered] = useState(false)

    const handleMouseOver = () => {
        setIsHovered(true)
    };

    const handleMouseOut = () => {
        setIsHovered(false)
    }

    return (
        <div
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            onMouseDown={!isHovered ? handleMouseOver : handleMouseOut}
            className="container-gif">
            {!isHovered ? (
                <div className='gif-img-container'>
                    <img className='logo-play' src='assets/logo-play.svg' alt='logo play' />
                    <img className="gif" src={imageStatic}
                        alt="image static gif"
                    />

                </div>
            ) : (
                <div className='gif-img-container'>
                    <img className='logo-pause' src='assets/logo-pause.svg' alt='logo pause' />
                    <img className='gif' src={gifAnimated}
                        alt="animation gif"
                    />

                </div>
            )}
        </div>
    )
}

export default GifController

// style={{width : '500px', height: '286px'}}