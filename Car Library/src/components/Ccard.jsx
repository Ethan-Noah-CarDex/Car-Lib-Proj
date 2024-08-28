const Carcard = ({ car }) => {
   const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(`${car.Make_Name} ${car.Model_Name}`)}&tbm=isch`;
 
   return (
       <div className="individualcard">
        <h2>{car.Make_Name}</h2>
        <p>{car.Model_Name}</p>
        <a href={googleSearchUrl} target="_blank" rel="noopener noreferrer">
        <button>Images</button>
      </a>       </div>
    )
      
   }


   export default Carcard

