Plan

1. Make a reviews component with three buttons for each country ✅
2. Style the component and buttons to match the brief ✅
3. Import it into Main.jsx ✅
4. useEffect and useState 


Flow:
Someone clicks a button which changes the state of "selectedCountry".
When the "selectedCountry" state changes the component will re-render and if the  useEffect depends on that state it will trigger the useEffect hook to run.
That useEffect could run a fetch request.
Pass the "selectedCountry" state as part of the request so you make a request that asks for data specific to that country.
Once the data returns from fetch - store it in the second bit of state that is meant to hold reviews.
The component will re-render (because you updated that second bit of state) and show the review.

// Flow of the component :)

    // The component renders the first time with null state for "selectedPokemon" and "pokemonData"

    // User clicks a button, that triggers the click handler, that changes "selectedPokemon" state.

    // The component re-renders because "selectedPokemon" has changed.
        // Because the component re-renders, the component's code gets run again.
        // Because our useEffect depends on the "selectedPokemon" state the code in useEffect runs.
        // The useEffect code makes a fetch request to get some data.
        // When the request comes back with some data we change the "pokemonData" state to contain that data.

     // Component re-renders becuase "pokemonData" has changed.