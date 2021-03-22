import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { FirebaseAuthProvider, IfFirebaseAuthed } from '@react-firebase/auth';
import { firebaseConfig } from '../firebase/config';
import UploadForm from './UploadForm';

const Login = () => {
    const [user, setUser] = useState(null);

    const signIn = () => {
        const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleAuthProvider).then((result) => {
            setUser(result.user);
        });
    }

    const signOut = () => {
        firebase.auth().signOut();
        setUser(null);
    }

    return (
        <FirebaseAuthProvider {...firebaseConfig} firebase={firebase}>
            { user ? <button className="control" onClick={signOut}>Sign out</button> : <button className="control" onClick={signIn}>Sign in</button>}
            <IfFirebaseAuthed>
                {() => (
                    <UploadForm />
                )}
            </IfFirebaseAuthed>
        </FirebaseAuthProvider>
    )
}

export default Login;