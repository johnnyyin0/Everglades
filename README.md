# project-atelier
FEC

1. install vite(command): npm create vite@latest
2. npm install
3. npm run dev

Install concurrently globally:
1. npm i -g concurrently
// this enables simultaneous operation of vite and nodemon via a single command

To run front and backend services while you build:
1. npm install
2. npm run dev
// this will run Vite and nodemon in the same terminal window which will monitor their respective components for changes and refresh as necessary

ENVIRONMENTAL VARIABLES:

PORT - whichever port you want to run the backend server on, defaults to 3000 in 'server/index.js'

DB_USERNAME and DB_PASSWORD -- you will need to create a new user for a new or existing MongoDB Atlas Cluster. Log in to cloud.mongodb.com, go to 'Database Access" under "SECURITY" on the left sidebar, and click "ADD NEW DATABASE USER." Once you assign the new user at least one role or permission, you will be given the option to enter a password. Store the username and password under environmental variables DB_USERNAME and DB_PASSWORD, respectively.

TESTING:

To start the test monitoring:
npm test

//To test coverage:
//npm run coverage
//NOT YET IMPLEMENTED

To add tests:
(ref: https://vitest.dev/api/)
1. Create a new file in the 'spec' folder with the suffix 'spec.js'
2. import { it, expect } from 'vitest'
3. use the following format for all tests on the page:

it('Should perform expected action', () => {
  expect(firstResultOfTestedThing).toBe(firstExpectedResult)
  expect(resultOfTestedThing).to.equal(secondExpectedResult)
})                              ^
                                |
                                vitest supports all Chai and Jest assertion formats. See the following for details:
                                Chai: https://www.chaijs.com/api/bdd/
                                Jest: https://jestjs.io/docs/expect



SOCIAL MEDIA BUTTONS

//To install dependencies run:

npm install react-share --save
npm install cloudinary
npm install react-inner-image-zoom --force
npm install -S react-image-size --force
npm install cookie-parser --force
npm install react-icons