import './style/Info.scss'

function Info({ imageSrc, imageAlt, information, poste }) {
    return (
        <div className="fiche-info">
            <div className="fiche-info__container">
                <img src={imageSrc} alt={imageAlt} className="fiche-info__container--img" />
            </div>

            <div className="fiche-info__text">
                <div className='titre'>
                    <img className='logos' src='assets/logo-info.svg' alt='logo info' />
                    <h3>Information :</h3>
                </div>
                <p>{information}</p>
            </div>
            <div className="fiche-info__text">
                <div className='titre'>
                    <img className='logos' src='assets/logo-couteau.svg' alt='logo couteau' />
                    <h3>Poste :</h3>
                </div>
                <p>{poste}</p>
            </div>
        </div>
    )
}

export default Info