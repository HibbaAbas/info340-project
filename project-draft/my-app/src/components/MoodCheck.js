import React, { useState } from 'react';

export function MoodCheck(props) {

    const MOOD_TOP = [
        process.env.PUBLIC_URL + '/img/a_emoji1.png',
        process.env.PUBLIC_URL + '/img/a_emoji2.png',
        process.env.PUBLIC_URL + '/img/a_emoji3.png'
    ];

    const MOOD_BOTTOM = [
        process.env.PUBLIC_URL + '/img/a_emoji4.png',
        process.env.PUBLIC_URL + '/img/a_emoji5.png',
        process.env.PUBLIC_URL + '/img/a_emoji6.png'
    ];

    // image url is not unique, so need to use index as key!
    const mood_top = MOOD_TOP.map((emoji, index) => {
        const element = <img key={index} src={emoji} />
        return element;

    });
    const mood_bottom = MOOD_BOTTOM.map((emoji, index) => {
        const element = <img key={index} src={emoji} />
        return element;
    });

    return (
        <section className="mood_check">
            <header>
                <h3>How are you feeling today?</h3>
            </header>
            <div className="mood_top">
                {mood_top}
            </div>
            <div className="mood_bottom">
                {mood_bottom}
            </div>
        </section>
    );
}

