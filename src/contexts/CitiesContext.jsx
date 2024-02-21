import {createContext, useContext, useEffect, useState} from "react";

const CitiesContext = createContext();

export const useCities = () => {
    const context = useContext(CitiesContext);
    if (context === undefined) throw new Error("CitiesContext was used outside the CitiesProvider")
    return context;
}

export const CitiesProvider = ({children}) => {
    const [cities, setCities] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const BASE_URL = "http://localhost:5174/"

    useEffect(() => {
        const fetchCities = async () => {
            try {
                setIsLoading(true);
                const res = await fetch(`${BASE_URL}cities`);
                const data = await res.json();
                setCities(data);
            } catch {
                alert("Couldn't fetch data!");
            } finally {
                setIsLoading(false);
            }
        }

        fetchCities()

    }, [])
    
    
    return (
        <CitiesContext.Provider value={{
            cities, isLoading
        }}>{children}</CitiesContext.Provider>
    )
}