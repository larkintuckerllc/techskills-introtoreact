-----------------------------------------------

filename: techskills-introtoreact-3-taking_a_breath_of_ES2015

title: Taking a Breath of ES2015

subtitle: Intro to React

-----------------------------------------------

Outline:

  - [_Question_:] What is ES2015 in and why is it relevant to React?
  - ES2015 is a modern version of JavaScript that simplifies common pattern.
  - The build process frees us to transpile
    - Transpile: convert from one language to another
      - Coffescript: ruby community
      - TypeScript: Microsoft Google
      - ES2015: everyone else, including Facebook
  - linting: In addition to building, CRA lints
    - linting - reporting compile time errors
    - cannot detect run time errors, e.g., accessing property of undefined
    - [_Cue_:]
      - Observing result
      - Execute
        - Working directory
          - linting
        - Command
          - yarn start
    - [_Cue_:]
        - Compile time error
        - Editor
          - linting/src/index.js
    - [_Cue_:]
        - Run time error
        - Editor
          - linting/src/index.js
  - const and let
    - const: Used when the variable will not be re-assigned.
    - let: Used when the variable will be re-assigned.
    - [_Cue_:]
      - updating with const and added for let
      - Editor
        - variables/src/index.js
    - [_Question_:] Can you remind me what the difference between const and let is?
    - Emphasis difference between re-assigning and changing property of
  - arrow functions - shorthand anonymous functions
    - [_Cue_:]
      - replace with arrow function
      - Editor
        - arrow-functions/src/hello/index.js
    - [_Cue_:]
      - shorten further with no curly brackets
      - Editor
        - arrow-functions/src/hello/index.js
  - import export replacing require and module.export
    - [_Cue_:]
      - replace with import
      - Editor
        - import-export/src/index.js
    - [_Cue_:]
      - replace with export
      - Editor
        - import-export/src/hello/index.js
  - named imports and destructuring
    - [_Question_:] Destructuring sounds complicated?
    - Explain by example, Last example we only exported a single thing
    - Can additionally export named things
    - [_Cue_:]
      - add named
      - Editor
        - named/src/hello/index.js
    - [_Cue_:]
      - Use named
      - Editor
        - named/src/index.js
    - [_Cue_:]
      - Use destructuring to avoid weirdness
      - Editor
        - named/src/index.js      
  - [_Cue_:]
    - Making sure still worked.
    - Execute
      - Working directory
        - named
      - Command
        - yarn start
  - [_Question_:] When are we going to learn React?
  - In the next episode we will dive into React.
