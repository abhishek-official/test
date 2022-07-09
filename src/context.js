import React, { useContext, useEffect, useState } from "react";
import Cards from "./Cards";

const API_URL = `<Cards />`
const AppContext = React.createContext();

const AppProvider = ({children}) => {

    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState(true);
    
    // useEffect(() => {
    //     getMovies(API_URL);
    // },[])


    return <AppContext.Provider value="abhishek">{children}</AppContext.Provider>
}


const useGlobalContext = () => {
    return useContext(AppContext);
}
export {AppContext,AppProvider,useGlobalContext};