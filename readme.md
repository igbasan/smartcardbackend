
## CLONE THE PROJECT


## INSTALL THE DEPENDENCIES
 ```npm install```

## RUN MIGRATION TO INSTANTIATE DATABASE
```npm run update-db```

NOTE - if error occur, try installing sequelize-cli globally

## START THE SERVER
To start the development server
```npm run dev```
To start the production server
```npm start```

## DATABASE
The development server uses sqlite for simplicity while 
the production uses postgres.
ensure to request for the environmental variables

## MIGRATION
Before starting the server, ensure to run the database migration
``` npm run update-db```
This creates the database connection and all tables

#### -- Note
remember to install tsc-node globally is server fails to start
For test driven approach, lets ensure to seperate concerns
```
| -- controller.ts
| -- route.ts
| -- authservice.ts
| -- interface.ts
| -- test.ts
```
## TECH-STACK
- sequelize orm - https://sequelize.org/master/manual/model-querying-basics.html
- validator js - https://www.npmjs.com/package/validatorjs
- sqlite for development database
- postgres for live database

## Project strcuture
The project structure is given below
```
project
│   README.md
|   tsconfig.json
│   package.json
|   .gitignore
│
└───src
|   |   app.ts
|   |
│   └───database
│       │___config
│       │___migrations
│       │___models









