const Carcard = ({ info }) => {
    console.log(info)
    return (
       <div className="individualcard">
        <h2>{info.Make_Name}</h2>
        <p>{info.Model_Name}</p>
       </div>
    )
      
   }


   export default Carcard

// import React from 'react';

// const Card = ({ searchTerm }) => {
//   // Build the Google Image search URL
//   const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchTerm)}&tbm=isch`;

//   return (
//     <div className="card">
//       <h3>{searchTerm}</h3>
//       <a href={googleSearchUrl} target="_blank" rel="noopener noreferrer">
//         <button>Search for {searchTerm} Images</button>
//       </a>
//     </div>
//   );
// };

// export default Card;
