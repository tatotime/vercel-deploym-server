let http = require('http');
let express = require('express');
let path = require('path');
let pg = require('pg');
let postgres = require('postgres');
let sql = postgres(process.env.connectionString);
const { Pool } = pg;
const port = 3000;

// create instance of express running - for routing purposes
const app = express();

// For Connecting to Database
const pool = new Pool({
    user: "postgres",
    host: "dungeonwebsite.supabase.co",
    database: "postgres",
    password: process.env.PASSWORD,
    port: "5432",
    ssl: { rejectUnauthorized: false }
})

// for creating a nodejs server
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello tato - from Node');
});

// GET request on root page
app.get('/', (req, res) => {

});

// POST request on root page
app.get('/', (req, res) => {

});

// GET request for to go to other pages
app.get('/home', (req, res) => {

});
app.get('/login', (req, res) => {

});
app.get('/signup', (req, res) => {

});

const query = {
    text: 'INSERT INTO user(username, first_name) VALUES($1,$2)',
    values: [],
};

// listen to requests on specified ports
server.listen(port, () => {
    console.log('Server running at http://localhost:8080}');
});

console.log("node is working!");