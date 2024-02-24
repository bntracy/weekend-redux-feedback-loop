# Weekend Redux Feedback Loop

## Description

A reflection/feedback form that prompts the user to respond to four questions, saves the responses using Redux, and allows the user to view the responses before submitting the data to the server and storing it in the database. At that point, a "Leave New Feedback" button clears that data and allows the user to begin again.

### Prerequisites

Link to software that is required to install the app (e.g. node).

- [Node.js](https://nodejs.org/en/)

## Installation

1. Create a database named `prime_feedback`,
2. The queries in the `database.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries, 
3. Open up your terminal and run an `npm install`
4. Run `npm run server` in your terminal
5. Run `npm run client` in your terminal
6. Navigate to http://localhost:5173/

## Built With

* Express
* Axios
* pg
* React
* Redux
