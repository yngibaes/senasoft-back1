import { useContext } from "react";
import { registrar } from "../api/rutas.js"
import { Context } from "./contexto.js";

export const Confirmacion=()=>{
    const contexto=useContext(Context)
    if(!contexto){
        throw new Error("Falla en el contexto")
    }
    return contexto
}

export const datoRegistrarse=async(values)=>{
    try{
        const respuest= await registrar(values)
        console.log(respuest)
    }
    catch(error){
        console.error(error)
    }
}

export const Tcontext=({children})=>{
     return <Context.Provider value={{}}> 
        {children}
    </Context.Provider>
}