import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [company_id, setCompanyId] = useState(null);

    const addCompanyId = (company_id) =>{
        setCompanyId(company_id);

        localStorage.setItem('company_id', company_id);
    }

    const logout = () => {
        setCompanyId(null);
        localStorage.removeItem('company_id');
    }

    const isCompanyIdSet = async () => {
        try {
            let company_id = localStorage.getItem('company_id');

            if(company_id){
                setCompanyId(company_id);
            }
        }
        catch(e){
            console.log('Error Setting Company Id');
        }
    }

    useEffect(()=>{
        isCompanyIdSet();
    },[]);

    return (
        <AuthContext.Provider value={{ company_id, addCompanyId, logout}}>
            { children }
        </AuthContext.Provider>
    )
}