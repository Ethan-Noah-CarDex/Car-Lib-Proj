import { useState, useEffect } from "react";
import CarContext from "./CarContext";
import { handleFetch } from "../utils";

const CarProvider = ({ children }) => {
    const [cars, setCar] = useState([]);
    const [filteredCars, setFilteredCars] = useState("")
    const [error, setError] = useState('');
    const []

    //useEffect
    useEffect(()=>{
        const fetchCall = async () => {
            const [data, error] = await handleFetch('https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/honda?format=json');
            if(data) setCar(data.Results) 

            if(error) setError(error)
            console.log(data)
   

        }
        fetchCall()
       
    },[])

    useEffect(()=>{
        setFilteredCars
    })
  
     const value = {
        cars,
        setCar,
        filteredCars, 
        setFilteredCars
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


