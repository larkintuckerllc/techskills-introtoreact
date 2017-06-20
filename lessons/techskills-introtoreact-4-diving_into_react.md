-----------------------------------------------

filename: techskills-introtoreact-4-diving_into_react

title: Diving into React

subtitle: Intro to React

-----------------------------------------------

Outline:

  - [_Question_:] What are all the files in a React application
  - Walking through CRA build
  - Build - Already talked about; same as before.
  - GIT configuration
    - README.md and .gitignore outside of scope
  - package management
    - package.json, node_modules, yarn.lock saw before
  - public folder
      - [_Cue_:]
        - ignore favicon.ico and manifest.json
        - root element, injecting into, separation of concerns (BENEFIT REACT)
        - Editor
            - my-app/public/index.html
  - Entry Point
      - [_Cue_:]
        - Application entry point; start of imports
        - imports should look familiar
        - ignore registerServiceWorker
        - document.getElementById('root') returns DOM
        - <App /> shorthand for React.createElement(App, null, null)
        - Think App as generating DOM elements and ReactDOM as injecting it
        - Editor
            - my-app/src/index.jsx
  - The Meat
    - [_Cue_:]
      - Import, export and destructuring be familiar
      - [_Question_:] Is the class syntax specific to React
      - No, class syntax is JavaScript ES2015 feature
        - same concept as other object-oriented
        - render is the only required method
        - [_Question_:] Is that HTML?
        - Looks like HTML is actually JSX
          - nested React.createElement commands
          - className instead of class
          - {logo} vs "logo" - pass value vs string
      - Editor
        - my-app/src/App.jsx
    - [_Cue_:]
      - Remind output
        - Execute
          - working directory
            - my-app
          - command
            - yarn start
- [_Question_:] Are we ready to start building with React?
- In next episode we will begin to re-implement our reference example and learn about additional concepts.
