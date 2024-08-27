const Carcard = ({ car }) => {
    return (
       <div className="individualcard">
        <h2>{car.Make_Name}</h2>
        <p>{car.Model_Name}</p>
        <img></img>
       </div>
    )
      
   }


   export default Carcard