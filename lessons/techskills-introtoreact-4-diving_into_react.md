-----------------------------------------------

filename: techskills-introtoreact-4-diving_into_react

title: Diving into React

subtitle: Intro to React

-----------------------------------------------

Outline:

  - Walking through CRA build
  - Build - Already talked about.
  - GIT configuration
    - [_Cue_:]
        - Project documentation
        - Editor
          - my-app/README.md
    - [_Cue_:]
        - Which files to not store in source control
        - Editor
          - my-app/.gitignore
  - package management
    - [_Cue_:]
        - Project dependencies, dev. dep, and scripts
        - Editor
          - my-app/package.json
    - [_Cue_:]
        - Lots of packages
        - Execute
          - working directory
            - my-app/node_modules
          - command
            - ls
    - [_Cue_:]
        - Yarn advanced dependency
        - Editor
          - my-app/yarn.lock
  - public folder
      - [_Cue_:]
        - root element, injecting into, separation of concerns
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
      - class syntax is JavaScript ES2015 feature
        - same concept as other object-oriented
        - render is the only required method
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
  - The alternative with ES5
    - document.createElement
    - setAttribute
    - classList.add
    - appendChild

Questions:
