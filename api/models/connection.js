import mongoose from 'mongoose';
const url="mongodb://127.0.0.1:27017/stackbatch24-30dec";
mongoose.connect(url);
console.log("Successfully connected to mongodb database...");