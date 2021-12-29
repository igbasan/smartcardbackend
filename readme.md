
## CLONE THE PROJECT


## INSTALL THE DEPENDENCIES
 ```npm install```

## START THE SERVER
To start the development server
```npm run dev```
To start the production server
```npm start```

## DATABASE
The development server uses sqlite for simplicity while 
the production uses postgres

#### -- Note
remember to install tsc-node globally is server fails to start
For test driven approach, lets ensure to seperate concerns

| -- controller.ts
| -- route.ts
| -- authservice.ts
| -- model.ts
| -- test.ts

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