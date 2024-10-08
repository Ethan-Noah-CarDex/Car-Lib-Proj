const Carcard = ({ car }) => {
   const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(`${car.Make_Name} ${car.Model_Name}`)}&tbm=isch`;

   return (
       <div className="individualcard">
        <h2>{car.Make_Name}</h2>
        <p>{car.Model_Name}</p>
        <a href={googleSearchUrl} target="_blank" rel="noopener noreferrer">
        <button class="button-73" role="button">See more...</button>

      </a>       </div>
    )

   }


   export default Carcard

 //import React from 'react';

//  const Card = ({ searchTerm }) => {
//    // Build the Google Image search URL
//   const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchTerm)}&tbm=isch`;

//    return (
//      <div className="card">
//        <h3>{searchTerm}</h3>
//        <a href={googleSearchUrl} target="_blank" rel="noopener noreferrer">
//          <button>Search for {searchTerm} Images</button>
//        </a>
//      </div>
//    );
//  };

// export default Card;
