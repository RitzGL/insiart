import React from 'react';

import './styles.css'

function Main(){
    // ! implementation:
        // run a request on the Met Museum API
        // search by artist name may be the easiest one to implement,
        // if even possible
            // search by name, perhaps easiest to implement
                // hit Met Museum with a search 
                    // * /public/collection/v1/search
                // API hit here:
                    // * https://collectionapi.metmuseum.org/public/collection/v1/search?q={STRING}
            // get objectId's from obj's containing the term
            // query the array one by one, until one matches the description
            // create Piece with met data information
                // name
                // artistName
                // description
                // imgUrl
                // year
                // styles
        // get the array of strings from each user's collection
            // query the database Piece.findById() in a .forEach() function
            // construct
    return(
        <>
            <h2>Welcome back, logged in user!</h2>
            <main>

            </main>
        </>
    )
}

export default Main;