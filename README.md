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


