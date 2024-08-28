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
  
    <nav className="navbar">
      <ul className="navbar-links">
        <h1>Honda Library</h1>
        <h2>Honda's in data base:{cars?.filter(car => car.Model_Name.includes(filteredCars)).length}</h2>
        <input value={filteredCars} onChange={(e) => setFilteredCars(e.target.value)} className="prompt" placeholder="Search Model " />
      </ul>
        
    </nav>
    
    </>
)

}


export default NavBar