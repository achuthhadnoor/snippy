import React, { useState, useEffect, useContext, createContext } from 'react';
import Router from 'next/router';

import firebase from './firebase';
import { getUser } from './api';

const tasksContext = createContext();

export function TasksProvider({ children }) {
    const task = useProvideTasks();
    return <tasksContext.Provider value={task}>{children}</tasksContext.Provider>;
}

export const useTasks = () => {
    return useContext(tasksContext);
};

function useProvideTasks() {
    const [tasks, setTasks] = useState(null);
    const [loading, setLoading] = useState(true);

    let initialTasks = getTasks();
    if (initialTasks) {
        setUser(initialTasks);
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
    
    const getTasks = ()=>{
        // query firebae and get the tasks list u
    }

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
        tasks,
        completedTasks,
        trash,
        later,
        pinned,
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