const Carcard = ({ info }) => {
    console.log(info)
    return (
       <div className="individualcard">
        <h2>{info.Make_Name}</h2>
        <p>{info.Model_Name}</p>
        <img></img>
       </div>
    )
      
   }


   export default Carcard