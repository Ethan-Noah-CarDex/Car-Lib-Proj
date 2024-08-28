import { useContext } from "react"
import CarContext from "../context/CarContext"
import CarCard from "./ccard"

const Carlist = () => {
const { cars, filteredCars} = useContext(CarContext)




return (
<>
        <h1>Honda Vehicles</h1> 
       <div className="ui centered cards">
     {/* { filteredCars ? filteredCars.map(car => {return <CarCard key = {car.Model_ID} info={car}/>}) : cars.map(car => {return <CarCard key = {car.Model_ID} info={car}/>})} */}
        {cars?.filter(car => car.Model_Name.includes(filteredCars)).map(car => <CarCard key={car.Model_ID} car={car} />)}
       </div>
</>
)
   }
   export default Carlist



