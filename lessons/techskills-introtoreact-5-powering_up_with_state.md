-----------------------------------------------

filename: techskills-introtoreact-5-powering_up_with_state

title: Powering Up with State

subtitle: Intro to React

-----------------------------------------------

Outline:

  - [_Question_:] From the last episode, I can see how we can render the counter and button, but not sure how to make it interactive.
  - Re-implement our counter application
  - [_Cue_:]
    - Start to re-implement
    - Execute
      - working directory
        - re-implement
      - command
        - yarn start
  - [_Cue_:]
      - Re-implement render
      - [_Question_:] Why the extra div?
      - Observe the extra div; thinking about how JSX is shortcut to createElement
      - Editor
        - re-implement/src/App.js
  - [_Cue_:]
    - state
    - instead of keeping value of counter (state) in DOM
    - store it in a property of the class; React benefit performance improvement
    - initialize it in the class constructor (and ES2015 thing)
    - will talk about props later
    - Editor
      - re-implement/src/App.js      
  - [_Cue_:]
    - using state
    - curly braces can be any JavaScript
    - ternary operator common used in JSX
    - Editor
      - re-implement/src/App.js      
  - [_Cue_:]
    - event handling
    - [_Question_:] This looks like the onclick syntax we used to use in HTML.
    - onClick translates to addEventListener
    - Also adds a removeEventListener for when component is unmounted
    - Another big benefit of React; having to remove event listeners is error prone
    - Editor
      - re-implement/src/App.js     
  - [_Cue_:]
    - updating state
    - setState does two things: 1. set state 2. trigger render method
    - Editor
      - re-implement/src/App.js     
  - virtual DOM
    - Instead of immediately updating DOM, renders to an in-memory copy
    - Compares differences to DOM and then updates differences
    - Performance benefit as the render method can render whole bunch
    - Big benefit of React
  - React Developer Tools
    - [_Cue_:]
      - Installed from Chrome Web Store
      - Browser
        - Google Chrome Web Store
    - [_Cue_:]
      - Inspect component hiearchy, state
      - Browser
        - Developer Tools
