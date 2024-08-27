import { useContext } from "react"
import CarContext from "../context/CarContext"



const NavBar = () => {


    const { filteredCars, setFilteredCars, cars } = useContext(CarContext);
   // const { searchTerm, setSearchTerm = useState('');}





console.log(cars.length)


//useEffect(()=>{
//    setFilteredCars(
 //       cars.filter(cars => 
//            cars.toLowerCase().includes)
//    )
//})





return (
    <>
    <nav>
        <h1>Car Lib</h1>
        <h2>Hondas in data base:{cars.length}</h2>
        <input value={filteredCars} onChange={(e) => setFilteredCars(e.target.value)} className="prompt" placeholder="Search Model " />

    </nav>
    
    </>
)

}


export default NavBar