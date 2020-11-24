import React, { useState, useEffect, useContext, createContext } from 'react';
import Router from './use-router';

import firebase from '../utils/firebasae';
import { getUser } from '../api';

const authContext = createContext();

export function AuthProvider({ children }) {
    const auth = useProvideAuth();
    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
    return useContext(authContext);
};

function useProvideAuth() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    let initialUser = getUser();
    if (initialUser) {
        setUser(initialUser);
        setLoading(false);
    }
    const handleUser = async (rawUser) => {
        if (rawUser) {
            const user = await formatUser(rawUser);
            const { token, ...userWithoutToken } = user;

            getUser(user.uid, userWithoutToken);
            setUser(user);
            setLoading(false);
            return user;
        } else {
            setUser(false);
            setLoading(false);
            return false;
        }
    };
    const signinWithGoogle = (redirect) => {
        setLoading(true);
        return firebase
            .auth()
            .signInWithPopup(new firebase.auth.GoogleAuthProvider())
            .then((response) => {
                handleUser(response.user);
                localStorage.setItem('autheduser',response.user.uid);
                if (redirect) {
                    Router.push(redirect);
                }
            });
    };

    const signout = () => {
        Router.push('/');

        return firebase
            .auth()
            .signOut()
            .then(() => handleUser(false));
    };

    useEffect(() => {
        const unsubscribe = firebase.auth().onIdTokenChanged(handleUser);

        return () => unsubscribe();
    }, []);

    return {
        user,
        loading,
        signinWithGoogle,
        signout
    };
}

const getStripeRole = async () => {
    await firebase.auth().currentUser.getIdToken(true);
    const decodedToken = await firebase.auth().currentUser.getIdTokenResult();

    return decodedToken.claims.stripeRole || 'free';
};

const formatUser = async (user) => {
    return {
        uid: user.uid,
        email: user.email,
        name: user.displayName,
        token: user.xa,
        provider: user.providerData[0].providerId,
        photoUrl: user.photoURL,
        stripeRole: await getStripeRole()
    };
};