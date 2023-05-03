import React, { createContext, useEffect, useState } from 'react';
import {GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import app from '../Firebase/firebase.config';



export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();
const githubAuthProvider = new GithubAuthProvider();


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);

    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleAuthProvider)
    }

    const signInWithGithub = () => {
        return signInWithPopup(auth, githubAuthProvider)
    }

    const logOut = () => {
        return signOut(auth);
    }

    // auth state observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            setLoader(false);
        });
        return ()=>{
            unsubscribe;
        }
    }, [])

    const authInfo = {
        user,
        signUp,
        signIn,
        signInWithGoogle,
        signInWithGithub,
        logOut
    }



    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;