Plan

1. Make a reviews component with three buttons for each country ✅
2. Style the component and buttons to match the brief ✅
3. Import it into Main.jsx ✅
4. useEffect and useState ✅
5. Get data to display on the website (relevant to the country selected) ✅


Flow:
- Someone clicks a button which changes the state of "selectedCountry".
- When the "selectedCountry" state changes the component will re-render and if the  useEffect depends on that state it will trigger the useEffect hook to run.
- That useEffect could run a fetch request.
- Pass the "selectedCountry" state as part of the request so you make a request that asks for data specific to that country.
- Once the data returns from fetch - store it in the second bit of state that is meant to hold reviews.
- The component will re-render (because you updated that second bit of state) and show the review.
