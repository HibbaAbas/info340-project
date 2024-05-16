import React from 'react';

import { Nav } from './Nav';
import { Footer } from './Footer';

function AboutContainer(props) {
    return (
        <div className="predictions">
            <header className="aboutTitle">
                <h1>About Us</h1>
            </header>
        </div>
    );
}

function Mission(props) {
    return (
        <div className="info-grid">
            <img src="img/period.png" alt="Period icon" />
            <div className="info">
                <header>
                    <h2> Our mission</h2>
                </header>
                <p>HealthHarmony is dedicated to revolutionizing the way individuals approach their menstrual health.
                    We believe in providing accessible, inclusive, and personalized tools for everyone who menstruates,
                    regardless of socioeconomic status or background.</p>
            </div>
        </div>
    )
}

function Values(props) {
    return (
        <section className="values">
            <header>
                <h2>Our values</h2>
            </header>
            <div className="info-grid">
                <div className="value-shape">
                    <h3>Inclusivity</h3>
                    <p>We prioritize inclusivity by designing our platform to cater to the diverse needs
                        and experiences of all individuals who menstruate.</p>
                </div>
                <img src="img/inclusivity.png" alt="Inclusivity icon" />
            </div>
            <div className="info-grid">
                <div className="value-shape">
                    <h3>Accessibility</h3>
                    <p> We believe that access to menstrual health resources should be universal, which
                        is why our platform is completely free to use, with no premium features or subscriptions.</p>
                </div>
                <img src="img/inclusivity.png" alt="Inclusivity icon" />
            </div>
            <div className="info-grid">
                <div class="value-shape">
                    <h3>Empowerment</h3>
                    <p> We empower our users by providing them with the tools and knowledge they need to take
                        control of their menstrual health journey and lead healthier, happier lives.</p>
                </div>
                <img src="img/inclusivity.png" alt="Inclusivity icon" />
            </div>
        </section>
    )
}

function Team(props) {
    return (
        <section className="team">
    <header>
      <h2>Our Team</h2>
    </header>
    <p>We are a passionate team of individuals committed to making a positive impact on menstrual
      health awareness and accessibility. Meet our dedicated team members:</p>

    <div className="team-grid">
      <div className="team-member">
        <img src="img/anjali.jpg" alt="Anjali Schatzer"/>
        <h3>Anjali Schatzer</h3>
        <p><a href="mailto:anjals5@uw.edu">anjals5@uw.edu</a></p>
      </div>
      <div className="team-member">
        <img src="img/yusra.jpg" alt="Yusra Abdullahi"/>
        <h3>Yusra Abdullahi</h3>
        <p><a href="mailto:yusraaa@uw.edu">yusraaa@uw.edu</a></p>
      </div>
      <div className="team-member">
        <img src="img/hiba.jpg" alt="Hiba Abbas"/>
        <h3>Hiba Abbas</h3>
        <p><a href="mailto:hibaa3@uw.edu">hibaa3@uw.edu</a></p>
      </div>
      <div className="team-member">
        <img src="img/amartya.jpg" alt="Amartya Chaube" />
        <h3>Amartya Chaube</h3>
        <p><a href="mailto:achaub2@uw.edu">achaub2@uw.edu</a></p>
      </div>
    </div>
  </section>
    )
}

export function About(props) {
    return (
        <div>
            <Nav />
            <AboutContainer />
            <Mission />
            <Values />
            <Team />
            <Footer />
        </div>
    );
}