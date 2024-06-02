import React from 'react';
import {getAuth, EmailAuthProvider, GoogleAuthProvider} from 'firebase/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import {Navigate} from 'react-router-dom';


const firebaseUIConfig = {
    signInOptions: [
        {
            provider:EmailAuthProvider.PROVIDER_ID,
            requireDisplayName: true,
        },
        {
            provider:GoogleAuthProvider.PROVIDER_ID,
        },
    ],
    signInFlow:'popup',
    callbacks: {
        signInSuccessWithAuthResult: () => false,

    },
    credentialHelper:'none',

};

function SignInPage({currentUser}) {
    const auth=getAuth();


    // const[email,setEmail] = useState('');
    // const [password,setPassword]=useState('');
    // const navigate = useNavigate();
    // const auth=getAuth();
    if (currentUser) {
        return <Navigate to="/" />;
    }
    return (
        <div className="card bg-light">
            <div className="container card-body">
                <StyledFirebaseAuth uiConfig={firebaseUIConfig} firebaseAuth={auth}/>
            </div>
        </div>
    // )
    // const handleSubmit=async (e) => {
    //     e.preventDefault();
    //     try {
    //         await signInWithEmailAndPassword(auth,email,password);
    //         navigate('/');
    //     }catch(error) {
    //         console.error("Error Logging In: ", error);
    //     }
    // };

    // return (
    //     <div>
    //         <h1>Sign In</h1>
    //         <form onSubmit={handleSubmit}>
    //             <input
    //                 type="email"
    //                 placeholder="email"
    //                 value={email}
    //                 onChange={(e)=> setEmail(e.target.value)}
    //                 required
    //         />
    //         <input
    //             type="password"
    //             placeholder="Password"
    //             value={password}
    //             onChange={(e)=> setPassword(e.target.value)}
    //             required
    //         />
    //         <button type="submit">Sign In</button>
    //         </form>
    //         <p>Don't Have An Account? <a href="/signup">Sign Up</a></p>
    //     </div>

    );
}

export default SignInPage;