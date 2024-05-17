import React from 'react';


export function Cover(props) {
    return (
        <div className="cover">
            <img src="img/vulvas.png" alt="cover"/>
            <div className="log-in">
                <div className="log-in-form">
                    <h1>Health Harmony</h1>
                    <h2>Empowering your period</h2>
                    <h3>Log in</h3>
                    <p>New user? Create an account</p>
                    <input type="text" placeholder="email address" required />
                    <input type="password" id="password" name="password" placeholder="password" required/>
                    <button type="submit">Log in</button>
                </div>
            </div> 
        </div>
    )
}

