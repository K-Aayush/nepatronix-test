import mongoose from "mongoose";

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

declare global {
  var mongooseCache: MongooseCache | undefined;
}

let cached = global.mongooseCache;

if (!cached) {
  cached = global.mongooseCache = { conn: null, promise: null };
}

const ConnectDB = async (): Promise<typeof mongoose> => {
  if (cached.conn) {
    console.log("Reusing existing MongoDB connection");
    return cached.conn;
  }

  if (!process.env.NEXT_APP_DB) {
    console.error("NEXT_APP_DB environment variable is not defined");
    throw new Error("NEXT_APP_DB environment variable is not defined");
  }

  console.log("MongoDB URI:", process.env.NEXT_APP_DB);

  if (!cached.promise) {
    console.log("Initiating new MongoDB connection");
    cached.promise = mongoose
      .connect(process.env.NEXT_APP_DB, {
        serverSelectionTimeoutMS: 5000, // Timeout after 5s
        socketTimeoutMS: 45000, // Close sockets after 45s
        connectTimeoutMS: 10000,
        directConnection: true, // Connection timeout
        // Do NOT specify replicaSet here
      })
      .then((mongoose) => {
        mongoose.connection.on("error", (error) => {
          console.error("Mongoose connection error:", error);
        });
        mongoose.connection.once("open", () => {
          console.log("Connected to MongoDB successfully!");
        });
        return mongoose;
      })
      .catch((error) => {
        console.error("Failed to connect to MongoDB:", error);
        cached.promise = null; // Reset promise on failure
        throw error;
      });
  }

  try {
    cached.conn = await cached.promise;
    return cached.conn;
  } catch (error) {
    console.error("Error resolving MongoDB connection:", error);
    throw error;
  }
};

export default ConnectDB;
