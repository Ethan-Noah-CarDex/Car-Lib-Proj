import { useContext } from "react"
import CarContext from "../context/CarContext"
import CarCard from "./ccard"

const Carlist = () => {
const { cars } = useContext(CarContext)




return (
<>
        <h1>Cars</h1> 
       <div className="ui centered cards">
       
        {
            cars.map(car => {return <CarCard info={car}/>})
        }
       </div>
</>
)
   }
   export default Carlist