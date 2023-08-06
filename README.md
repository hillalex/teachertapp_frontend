# TeacherTapp Front-end Demo
![Test](https://github.com/hillalex/teachertapp_frontend/actions/workflows/Test.yml/badge.svg?branch=main)
[![Project Status: Concept – Minimal or no implementation has been done yet, or the repository is only intended to be a limited example, demo, or proof-of-concept.](https://www.repostatus.org/badges/latest/concept.svg)](https://www.repostatus.org/#concept)

This is a simple Next.js + React app for the TeacherTapp coding assignment.

## Requirements
* npm


## Installation
    
    npm install

## Generating types
The code makes use of Typescript types aut-generated from the [API schema](https://github.com/hillalex/teachertapp/tree/main/schema).
To regenerate these types, run:
        
        scripts/generate_types.sh


## Run 
For the app to work, you must first be running the API on port 8080. See the
[API README](https://github.com/hillalex/teachertapp#run) for details.
Then to start a dev server on port 3000:
    
        npm run dev


## TODO
To build this out into a production ready app, a lot of things would need to happen.
To begin with:
* pull out API code into a service
* error handling!
* add global state management (Redux)
* unit and integration tests
* ...