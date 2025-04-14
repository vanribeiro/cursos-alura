import mongoose from "mongoose";
import tokenMongo from "./tokenMongo.js";

mongoose.connect(`mongodb+srv://livraria:${tokenMongo}@livrariaaluracourse.avhzw9k.mongodb.net/livraria`);

let db = mongoose.connection;

export default db;