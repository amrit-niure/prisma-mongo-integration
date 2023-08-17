
// import { MongoClient } from "mongodb";

// if (!process.env.MONGODB_URI) {
//   throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
// }

// const uri = process.env.MONGODB_URI;
// const options = {};

// let client;
// let clientPromise;

// if (process.env.NODE_ENV === "development") {
//   if (!global._mongoClientPromise) {
//     client = new MongoClient(uri, options);
//     global._mongoClientPromise = client.connect();
//   }
//   clientPromise = global._mongoClientPromise;
// } else {
//   client = new MongoClient(uri, options);
//   clientPromise = client.connect();
// }

// export default clientPromise;

// MongoDB

import mongoose from 'mongoose'

const connectionDB = () => {
    try {
        mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        },
        )
        console.log("Database Connected...")
    } catch (err) {
        console.log(`${err} did not connect`)
    }
}

// Prisma

import { PrismaClient } from "@prisma/client"
const prisma = globalThis.prisma || new PrismaClient()
if(process.env.NODE_ENV === 'production') globalThis.prisma = prisma



export { connectionDB, prisma}

