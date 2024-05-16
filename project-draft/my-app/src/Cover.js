import React from 'react';


const Cover = () => (
    <div className="cover">
            <img src="img/vulvas.png" alt="cover"/>
            <div className="log-in">
                <div className="log-in-form">
                    <h3>Sign in</h3>
                    <p>New user? <a href="/register">Create an account</a></p>
                    <input type="text" placeholder="email address" required />
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="password" required/>
                    <button type="submit">Log in</button>

                </div>
               
            </div>
                
        
    </div>
);

export default Cover;