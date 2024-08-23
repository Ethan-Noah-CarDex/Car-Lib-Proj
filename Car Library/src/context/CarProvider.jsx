import { useState, useEffect } from "react";
import CarContext from "./CarContext";
import { handleFetch } from "../utils";

const CarProvider = ({ children }) => {
    const [cars, setCar] = useState([]);
    const [error, setError] = useState('');

    //useEffect
    useEffect(()=>{
        const fetchCall = async () => {
            const [data, error] = await handleFetch('https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/honda?format=json');
            if(data) setCar(data.Results) 

            if(error) setError(error)
   

        }
        fetchCall()
       
    },[])
  
     const value = {
        cars
    }


    return (
        <>
        <CarContext.Provider value = {value}>
           {children} 
        </CarContext.Provider>
        </>
    )


}

export default CarProvider


