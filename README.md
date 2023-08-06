# TeacherTapp Front-end Demo
This is a simple Next.js + React app for the TeacherTapp coding assignment.

## Generating types
To auto-generate Typescript types from the [API schema](https://github.com/hillalex/teachertapp/tree/main/schema), run
        
        scripts/generate_types.sh


## Run 
For the app to work, you must first be running the API on port 8080. See
[README](https://github.com/hillalex/teachertapp#run) for details.
Then to start a dev server on port 3000:
    
        npm run dev


## TODO
* pull out API code into a service
* add global state management (Redux)
* unit and integration tests
* ...