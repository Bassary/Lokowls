import './style/About.scss'

function About() {
    return (
        <section className="about">
            <h2>À Propos</h2>
            <div className='about__text'>
                <div className='about__text--competance'>
                    <h3>Compétances :</h3>
                    <p>présentation des compétance. Soit avec un block texte</p>
                    <p>Soit en liste</p>
                    <ul>
                        <li>Skill 1</li>
                        <li>Skill 2</li>
                        <li>Skill 3</li>
                    </ul>
                </div>
                <div className='about__text--parcours'>
                    <h3>Parcours :</h3>
                    <p>présentation du parcours.</p>
                </div>
                <div className='about__text--personnalite'>
                    <h3>Personnalité:</h3>
                    <p>présentation de ta personnalite, tes inspiration, methode de travail etc.</p>
                </div>
            </div>
            <img src='../src/assets/profil-lokowls.png'/>
        </section>
    )
}

export default About