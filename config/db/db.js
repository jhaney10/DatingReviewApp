//database setup
//For MongoDB validation, casting and business logic
const mongoose = require ('mongoose');
mongoose.set('strictQuery', true);

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true         
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

//For PostGres
const Pool = require('pg').Pool;
const pool = new Pool({
    user: process.env.POSTGRES_USERNAME,
    password: process.env.POSTGRES_PASSWORD,
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    database: process.env.POSTGRES_DB
});

module.exports = {connectDB, pool};