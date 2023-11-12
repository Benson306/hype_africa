import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [company_id, setCompanyId] = useState(null);
    const [brand_id, setBrandId] = useState(null);

    const addCompanyId = (company_id) =>{
        setCompanyId(company_id);

        localStorage.setItem('company_id', company_id);
    }
    const addBrandId = (brand_id) =>{
        setBrandId(brand_id);

        localStorage.setItem('brand_id', brand_id);
    }

    const logout = () => {
        setCompanyId(null);
        setBrandId(null);
        localStorage.removeItem('company_id');
        localStorage.removeItem('brand_id');
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

    const isBrandIdSet = async () => {
        try {
            let brand_id = localStorage.getItem('brand_id');

            if(brand_id){
                setBrandId(company_id);
            }
        }
        catch(e){
            console.log('Error Setting Brand Id');
        }
    }

    useEffect(()=>{
        isCompanyIdSet();
        isBrandIdSet();
    },[]);

    return (
        <AuthContext.Provider value={{ company_id, addCompanyId, brand_id, addBrandId, logout}}>
            { children }
        </AuthContext.Provider>
    )
}