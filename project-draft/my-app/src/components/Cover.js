import React from 'react';


export function Cover(props) {
    return (
        <div className="cover">
            <img src="img/vulvas.png" alt="cover"/>
            <div className="log-in">
                <div className="log-in-form">
                    <h1>Welcome to Health Harmony!</h1>
                    <h3>Sign in</h3>
                    <p>New User? Create an account</p>
                    <input type="text" placeholder="email address" required />
                    <input type="password" id="password" name="password" placeholder="password" required/>
                    <button type="submit">Log in</button>
                </div>



            </div>
            
        </div>
    )
}

