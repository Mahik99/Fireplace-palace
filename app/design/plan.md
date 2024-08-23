- create state for all input fields (6) ✅
- add handler function logic ✅
- add onChange to input ✅
- add value to input using {} ✅
- update state of correct input ✅
- add onSubmit to form✅
- error handling: check input is valid

  if any are blank, send error
  else
  send console log of information

## Reducer Plan

1. Check everyone understands the basics of using useReducer. ✅
2. Move your code over to useReducer. Do not add a single new feature to begin with. It's not easy moving to reducer, don't make it harder. ✅

- First focus on moving fullName into reducer, make a copy of the file. ✅
- Remove all states, onChange logic etc. ✅

3. Once the form does exactly what it did before but using useReducer - move on to add some of the new functionality like a loading indicator into your state. You can make the handle submit dispatch an action to say the form is submitting, then simulate waiting for 2 seconds (useTimeout maybe), then dispatch another action to say form submitted successfully.

- Button change on submit

  - change p tag in the button✅
  - when button pressed, change button text to "submitting"✅
  - when form submit complete, change button text "submitted"✅

    - html hide button disable ❌

    1. submit (design booking)✅
    2. submitting✅
    3. done / submitted succesfully✅

- error specific field
- postcode validation via API -https://postcodes.io/
  On form submit we should send the postcode the user has submitted to that api and check the country is valid.

4. Now continue to add more features ... like disabling the form while it's submitting, or more granular errors.

## Testing Plan:

1. Install Playwright in your project: “npm init playwright@latest” ✅
2. Plan some user stories using figjam.
