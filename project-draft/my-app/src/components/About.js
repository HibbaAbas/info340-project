import React from 'react';

import {Nav} from './Nav';
import { Footer } from './Footer';
import { teamData, valuesData } from '../data';

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
        <div className="info-grid-mission">
            <img className="logo" src="img/vulva_1.png" alt="Pink vulva icon" />
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
            {valuesData.map((value, index) =>
                <div className="info-grid">
                    <div className="value-shape">
                        <h3>{value.title}</h3>
                        <p>{value.description}</p>
                    </div>
                    <img src={value.imgSrc} alt={value.imgAlt} />
                </div>)}
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
                {teamData.map((member, index) =>
                    <div className="team-member">
                        <img src={member.imgSrc} alt={member.imgAlt} />
                        <h3>{member.name}</h3>
                        <p><a href={"mailto:" + member.email}>{member.email}</a></p>
                    </div>)
                }
            </div>
        </section>
    )
}

export function About(props) {
    return (
        <div>
            {/* <Nav /> */}
            <AboutContainer />
            <Mission />
            <Values />
            <Team />
            <Footer />
        </div>
    );
}