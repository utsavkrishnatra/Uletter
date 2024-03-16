import mongoose from "mongoose";
import { driver, createAstraUri } from "stargate-mongoose";

const ASTRA_DB_API_ENDPOINT = "https://72f81dd0-991d-48cd-8262-4fa4f340aa16-us-east-1.apps.astra.datastax.com";
const ASTRA_DB_CLIENT_ID = "hjTtMQpoNkdsPyWjMLLynkuK";
const ASTRA_DB_SECRET = "FFlgl2.,iEm4EyQ+3bdQI7l3sikl_wlrUhr4wF3K1KJCDDajHNnyw_cuF.wkNU4pgYK7z7Qc1Zwa,QYaqskF1OQEiyM5DKcPciioboap.-YCTocvOL6-2Ugqw55x7i4N";
const ASTRA_DB_APPLICATION_TOKEN = "AstraCS:vswJsDSUSAmgQASenfHrhreH:d87bd644e9488ee6c9d59bf729c06ee94e6cf0f159b074f0ca7bf711841f5192";

export const connectDb = async () => {
  try {
    const uri = createAstraUri(
      ASTRA_DB_API_ENDPOINT,
      ASTRA_DB_APPLICATION_TOKEN,
      ASTRA_DB_CLIENT_ID,
      ASTRA_DB_SECRET
    );

    // Log the URI to verify correctness
    console.log("Database URI:", uri);

    // Check if there's an existing connection
    if (mongoose.connection.readyState !== 0) {
      // Disconnect the existing connection
      await mongoose.disconnect();
    }

    mongoose.set("autoCreate", true);
    mongoose.setDriver(driver);

    const connectionOptions = {
      isAstra: true,
      bufferCommands: false, // Disable buffering commands
      bufferMaxEntries: 0, // Disable command buffering
      useNewUrlParser: true, // Optional
      useUnifiedTopology: true, // Optional
      connectTimeoutMS: 30000, // Timeout for initial connection
      socketTimeoutMS: 30000, // Timeout for socket connection
    };

    await mongoose.connect(uri, connectionOptions);

    // Check the connection status
    if (mongoose.connection.readyState === 1) {
      console.log("Connected to the database successfully!");
    } else {
      console.log("Failed to connect to the database.");
    }
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
};
