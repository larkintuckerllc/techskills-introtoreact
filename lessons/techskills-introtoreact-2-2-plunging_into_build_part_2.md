-----------------------------------------------

filename: techskills-introtoreact-2-2-plunging_into_build_part_2

title: Plunging into Build: Part 2

subtitle: Intro to React

-----------------------------------------------

Outline:

  - [_Question_:] CSS? I normally just add CSS links to my HTML file.
  - css: bringing in CSS
    - simply require it
    - production build creates a single combined CSS file
    - [_Cue_:]
      - Regular CSS file
      - Editor
        - css/src/index.css
    - [_Cue_:]
      - Importing CSS
      - Editor
        - css/src/index.js
    - [_Cue_:]
      - Observing result
      - Execute
        - Working directory
          - css
        - Command
          - yarn start
    - [_Cue_:]
      - Observing build
      - Execute
        - Working directory
          - css
        - Command
          - yarn build
    - [_Cue_:]
      - Observing build
      - Editor
        - css/build/index.html
    - [_Cue_:]
      - Observing build
      - Editor
        - css/build/static/css/main.XXX.css
  - [_Question_:] How about images?
  - images: bringing in images
    - Like CSS, just require it
    - [_Cue_:]
      - Add image to the src directory
      - Execute
        - Working directory
          - images/src
        - Command
          - ls
    - [_Cue_:]
      - Creating image tag - this is a pain
      - Editor
        - public/index.html
    - [_Cue_:]
      - Importing Image
      - Editor
        - images/src/index.js
    - [_Cue_:]
      - Observing result
      - Execute
        - Working directory
          - images
        - Command
          - yarn start        
    - [_Cue_:]
      - Observing result
      - Execute
        - Working directory
          - images
        - Command
          - yarn build
    - [_Cue_:]
      - Observing result
      - Execute
        - Working directory
          - images/build/assets/media
        - Command
          - ls
  - [_Question_:] So are we ready to learn React now?
  - In the next episode we will introduce the modern ES2015 JavaScript.
