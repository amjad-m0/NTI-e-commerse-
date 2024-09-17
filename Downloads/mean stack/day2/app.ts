import  express  from "express";
import dotenv from 'dotenv'
import dbConnection from "./config/db";
import mountRoutes from './routes';
import { Server } from "http";

const app :express.Application =express()
app.use(express.json())
dotenv.config()

dbConnection()
mountRoutes(app)
let server:Server
app.listen(process.env.PORT,() => {
    console.log(`app is listening on port ${process.env.PORT}`)
})
process.on('unhandledRejection', (err: Error) => {
    console.error(`unhandledRejection Error : ${err.name} | ${err.message}`);
    server.close(() => {
      console.error('Application is shutting down...')
      process.exit(1);
    })
  })