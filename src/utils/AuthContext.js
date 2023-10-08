import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [id, setId] = useState(null);

    const addId = (id) =>{
        setId(id);

        localStorage.setItem('id', id);
    }

    const isIdSet = async () => {
        try {
            let id = localStorage.getItem('id');

            if(id){
                setId(id);
            }
        }
        catch(e){
            console.log('Error Setting Id');
        }
    }

    useEffect(()=>{
        isIdSet();
    },[]);

    return (
        <AuthContext.Provider value={{ id, addId}}>
            { children }
        </AuthContext.Provider>
    )
}