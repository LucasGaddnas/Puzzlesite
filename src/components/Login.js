import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { FirebaseAuthProvider, IfFirebaseAuthed } from '@react-firebase/auth';
import { firebaseConfig } from '../firebase/config';
import UploadForm from './UploadForm';


const Login = ({ setShowLogin }) => {
    const [user, setUser] = useState(null);

    const handleClick = (e) => {
        if (e.target.classList.contains('backdrop'))
            setShowLogin(null);
    }

    const signIn = (e) => {
        e.preventDefault();
        
        firebase.auth().signInWithEmailAndPassword(e.target[0].value, e.target[1].value).then((result) => {
            setUser(result.user);
        }).catch((error) => {
            if (error.code === 'auth/wrong-password') {
                alert('Felaktigt lösenord');
            } else if (error.code === 'auth/user-not-found') {
                alert('Användaren hittades inte');
            } else if (error.code === 'auth/user-disabled') {
                alert('Användaren avaktiverad');
            } else if (error.code === 'auth/invalid-email') {
                alert('Ogiltig epost');
            } else {
                alert(error.message);   // In case of future error messages
            }
        });
    }

    const signOut = () => {
        firebase.auth().signOut();
        setUser(null);
        setShowLogin(false);
    }

    return (
        <FirebaseAuthProvider {...firebaseConfig} firebase={firebase}>
            { user ? <button className="control" onClick={signOut}>Logga ut</button> : <div className="backdrop" onClick={handleClick}>
                <div className="login-card">
                <div className="login-content">
                <div className="login-title">
                    <h2>Inloggning</h2>
                    <div className="underline-title"></div>
                </div>
                <form className="login-form" onSubmit={signIn}>
                    <label htmlFor="email">&nbsp;E-post:</label>
                    <input className="form-content" type="text" name="email" required/>
                    <div className="form-border"></div>
                    <label htmlFor="password">&nbsp;Lösenord:</label>
                    <input className="form-content" type="password" name="password" required/>
                    <div className="form-border"></div>
                    <button className="submit-btn" type="submit">Logga in</button>
                </form></div></div></div>}
            <IfFirebaseAuthed>
                {() => (
                    <UploadForm />
                )}
            </IfFirebaseAuthed>
        </FirebaseAuthProvider>
    );
}

export default Login;