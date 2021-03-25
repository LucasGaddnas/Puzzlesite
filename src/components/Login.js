import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { FirebaseAuthProvider, IfFirebaseAuthed } from '@react-firebase/auth';
import { firebaseConfig } from '../firebase/config';
import UploadForm from './UploadForm';


const Login = ({ setShowLogin }) => {
    const [user, setUser] = useState(null);

    const handleClick = (e) => {
        if (e.target.classList.contains('login'))
            setShowLogin(null);
    }

    const signIn = (e) => {
        e.preventDefault();
        
        firebase.auth().signInWithEmailAndPassword(e.target[0].value, e.target[1].value).then((result) => {
            setUser(result.user);
        }).catch((error) => {
            if (error.code === 'auth/wrong-password') {
                alert('Wrong password');
            } else if (error.code === 'auth/user-not-found') {
                alert('User not found');
            } else if (error.code === 'auth/user-disabled') {
                alert('User disabled');
            } else if (error.code === 'auth/invalid-email') {
                alert('Invalid email');
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
            { user ? <button className="control" onClick={signOut}>Sign out</button> : <div className="backdrop login" onClick={handleClick}>
                <div className="login-card">
                <div className="login-content">
                <div className="login-title">
                    <h2>LOGIN</h2>
                    <div className="underline-title"></div>
                </div>
                <form className="login-form" onSubmit={signIn}>
                    <label htmlFor="email">&nbsp;E-mail:</label>
                    <input className="form-content" type="text" name="email" required/>
                    <div className="form-border"></div>
                    <label htmlFor="password">&nbsp;Password:</label>
                    <input className="form-content" type="password" name="password" required/>
                    <div className="form-border"></div>
                    <button className="submit-btn" type="submit">Sign in</button>
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