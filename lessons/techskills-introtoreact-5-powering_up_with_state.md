-----------------------------------------------

filename: techskills-introtoreact-5-powering_up_with_state

title: Powering Up with State

subtitle: Intro to React

-----------------------------------------------

Outline:

  - Re-implement our counter application
  - [_Cue_:]
      - Re-implement render
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
  - imperative vs declarative
    - imperative solution would have click handler directly update both divs
    - declarative solution is say change the value of the counter and let all UI elements update themselves.
    - Big benefit of React
  - [_Cue_:]
    - It is working
      - Execute
        - working directory
          - re-implement
        - command
          - yarn start

Questions:
