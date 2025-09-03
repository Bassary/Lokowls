import './style/About.scss'

function About() {
    return (
        <section className="about">
            <h2>À Propos</h2>
            <div className='about__content'>

                <div className='block-img-txt'>
                    <img className='portrait' src='assets/profil-lokowls.png' />
                    <div className='block-txt'>
                        <div className='about__content--block-text'>
                            <div className='titre'>
                                <img className='logos' src='assets/logo-compass.svg' alt='logo boussole' />
                                <h3>Parcours :</h3>
                            </div>
                            <p>Après avoir fini mes études d'audiovisuel option montage en 2022, j'ai passé un an dans une radio en tant que référent audiovisuelle dans le cadre d'un service civique. Cette expérience à la fois humaine et professionnelle, m'a permis d'affiner mes compétences et de nourrir ma curiosité.</p>
                            <br></br>
                            <p>Par la suite, de 2023 à 2025, j'ai travaillé dans une boîte de production audiovisuelle située à Strasbourg, occupant le poste de monteur vidéo et technicien. Également organisme de formation, j'ai une location d'être formateur After Effects, Davinci et Première Pro.</p>
                        </div>
                        <div className='about__content--block-text'>
                            <div className='titre'>
                                <img className='logos' src='assets/logo-muscle.svg' alt='logo muscle' />
                                <h3>Compétences :</h3>
                            </div>
                            <ul>
                                <li>Logiciels : Première Pro, After Effect, Photoshop, Davinci, Vmix.</li>
                                <li><span>Montage/Motion Design :</span> court-métrage, YouTube, clip, réseaux sociaux, best-off, montage d'entreprise.</li>
                                <li><span>Direction Artistique :</span> motion graphic, animation, chaînes Twitch</li>
                                <li><span>Régie/Réalisation :</span> storyboard, régie en direct, support technique</li>
                            </ul>

                        </div>

                    </div>
                </div>
                <div className='about__content--block-text'>
                    <div className='titre'>
                        <img className='logos' src='assets/logo-brain.svg' alt='logo cerveau' />
                        <h3>Personnalité :</h3>
                    </div>
                    <p>« J'aime tester de nouvelles choses »<br></br>C'est cette phrase qui caractérise le mieux ma manière de penser.
                        Au cours des divers projets pour lesquels j'ai travaillé, je me suis toujours adapté aux contraintes et imprévus qui arrivent souvent lors d'une création audiovisuelle.
                        Ayant l'habitude de tester de nouvelles choses de mon côté, je mets par la suite mes connaissances en pratique au service de projets professionnels.
                        J'aime alors l'idée d'être un véritable couteau suisse sachant autant prévenir les imprévus que les résoudre.
                        Je mets également une grande importance sur l'esprit d'équipe. D’expérience, le facteur humain est central.
                        C'est pourquoi il est important, selon moi, de garder un équilibre entre écoute, respect et engagement sur un projet dans lequel je me lance.</p>
                </div>
            </div>
        </section>
    )
}

export default About