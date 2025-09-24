console.log("server running ");
console.log("server running ");
console.log("server running 123456677");


// module


// commonjs
// let a =10;
// const mongodb = require('mongoose')
// module.exports = {mongodb}



// const {add} = require('./app.js');

// console.log(add(10,20));

// module
// import mongoose from 'mongoose'

import addition from './app.js'

console.log(addition(100,20));


// import {config} from 'dotenv'
// config()

import 'dotenv/config'
import mongodb from 'mongoose'
const key = process.env.SECRET_KEY
console.log(key);
const url = process.env.MONGODB_URI

console.log("hii");
async function dbConfig(){
    try {
        const res = await mongodb.connect(url)
        
        console.log(res.connection.host ,"Database connected successfully");
        
    } catch (error) {
        console.log(err);
        process.exit(1)
    }
}
dbConfig()