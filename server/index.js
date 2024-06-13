import express from 'express';
import Connection from './database/db.js';
import dotenv from 'dotenv';
import DefaultData from './default.js';
const app = express();

dotenv.config();

const USERNAME=process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;

const PORT = 8000;

Connection(USERNAME,PASSWORD);
app.listen(PORT, () => console.log(`server is successfully running on ${PORT}`));

DefaultData();