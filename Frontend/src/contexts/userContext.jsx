import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
axios.defaults.withCredentials = true;

export const userContext = createContext({});

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        if (!user) {
            axios.get('http://localhost:5000/profile').then(({ data }) => {
                setUser(data);
            });
        }
    }, [user]);

    return (
        <userContext.Provider value={{ user, setUser }}>
            {children}
        </userContext.Provider>
    );
};
