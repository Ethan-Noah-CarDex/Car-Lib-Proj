import { useContext } from "react"
import CarContext from "../context/CarContext"
import CarCard from "./ccard"

const Carlist = () => {
const { cars } = useContext(CarContext)




return (

        
       <div className="ui centered cards">
        <h1>Cars</h1>
        {
            cars.map(car => {return <CarCard info={car}/>})
        }
       </div>

)
   }
   export default Carlist