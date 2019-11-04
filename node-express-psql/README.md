# Node Express PSQL API Quickstart
This module contains boilerplate code for creating a NodeJS, Express, and PSQL API.

# Dependencies
### OS X
##### Installing Node
[Install NodeJS][install-node] from the official site.
OR
Using homebrew
```
$brew install node
```

##### Local Postgress Database
The [Postgress Mac App][postgress-mac] provides all the necessary features for running a local Postgres database. Follow the configuration and setup guide at the link.

NOTE:
After setting up the postgres local database the following file will need to be updated with the database details.
`./node-express-psql/build/start-local-server.sh`
Update the following fields:
- DB_USER
- DB_PASSWORD (Locally this may be empty)
- DB_DATABASE
- DB_PORT

##### Node Dependencies
Running the following will install all the Node dependencies for running the API.
```
$cd node-express-psql
$npm install
```

### Other Operating Systems
*Coming soon*

# Running the API
The API is set up to run locally using the following command
```
$cd node-express-psql
$npm run local
```
Running local targets the `./node-express-psql/build/start-local-server.sh`
build script. Different run configurations can be added to the  `./node-express-psql/package.json` under scripts.

# Example Usage
The API is set up to track simple states of Projects and associated Tasks.

## Using curl
###### Create a project
Creates a project with the name and description supplied in the request.
```
curl -H "Content-Type: application/json" -X POST -d '{"name":"My Project", "description":"Project Desc 1"}' http://localhost:8081/projects/create
```

###### Get Active Projects
Fetches Projects that are not 'Deleted' from the database.
```
curl -X GET http://localhost:8081/projects/active
```

###### Create a Task
Creates a Task with the name and description supplied in the request.
NOTE: `projectId` is an optional parameter. Supplying a `projectId` will
associate the task with a project (The project must already exist).

After associating a Task with a Project, call the get active projects route.
You will see the Task returned in the Project.
```
curl -H "Content-Type: application/json" -X POST -d '{"name":"My Task", "description":"Task 1 Desc", "projectId": 1}' http://localhost:8081/tasks/create
```

###### Get Active Tasks
Fetches Projects that are not 'Deleted' from the database.
```
curl -X GET http://localhost:8081/tasks/active
```
# Running Tests
The API is set up to run unit tests using the following commands
```
$cd node-express-psql
$npm run test
```

# Architecture

#### Package Structure
- config - Contains code responsible setup and initialization of components required to run the application.
- models - Contains the [Sequelize] ORM Models for interacting with the database.
- services - Contain the core logic for interacting with models and the databases. Note: The "services" do not take in the request/response objects from the route. The services should have a set and defined list of parameters that it requires. Defining services this way will improve testability by preventing the need to mock requests and responses in unit tests.
- routes - The routes defined in the API. The routes are broken up based on the responsibility of the route. Breaking up the routes will help with readability as the number of routes increases.
- factories - Used to determine which database models should be loaded. Mock models are loaded for unit tests.

#### Database
For this API Quickstart, Postgres was chosen as the desired database solution. There are many other viable database solutions both relational and non-relational. It is beyond the scope of this Quickstart to discuss the advantages and disadvantages of different database solutions. That said, Postgres is a great relational database solution.

# Tech
The API relies on a number of technologies. The primary technologies are:
* [NodeJS] - JavaScript Runtime.
* [Express] - Web Application Framework.
* [Sequelize] - ORM for interfacing with the database. Some developers do not like the large amount of abstraction an ORM, like Sequelize, provides. Sequelize offers a strong set of features that can make getting up and running very simple. However, the queries are highly abstracted and Sequelize requires *Sequelize* specific knowledge. It is worth looking at a mid-level query builder solution like the popular [KnexJS]. It offers a strong feature set with less abstraction...
* [Winston] - Logger (Not leveraged nearly enough here, but it is set up for use.)
* [ESlint] - Code linter for keeping the code clean and consistent.
* [Mocha] - Unit test framework.
* [Chai] - Assertion library for unit tests.
* [Sequelize-Mock] - Sequelize Mock is used to mock the database objects for unit tests. NOTE: The setup for Sequelize-Mock varies from the documentation. Factories have been used in this project to import the mock objects rather than overriding the import.

   [KnexJS]: <http://knexjs.org/>
   [Winston]: <https://github.com/winstonjs/winston>
   [install-node]: <https://nodejs.org/en/download/>
   [NodeJS]: <http://nodejs.org>
   [express]: <http://expressjs.com>
   [postgress-mac]: <https://postgresapp.com>
   [Sequelize]: <https://sequelize.org/>
   [ESlint]: <https://eslint.org/>
   [Mocha]: <https://mochajs.org/>
   [Chai]: <https://www.chaijs.com/>
   [Sequelize-Mock]: <https://sequelize-mock.readthedocs.io/en/stable/>
