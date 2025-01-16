import models from '../models/index.js';
import db from '../config/connection.js';

export default async (modelName: "Question", collectionName: string) => {
  try {
    const model = models[modelName];

    if (!model) {
      throw new Error(`Model ${modelName} not found.`);
    }

    // Ensure the database connection is ready
    if (!db.readyState) {
      throw new Error('Database connection is not established.');
    }

    // Access the database object
    const database = db.db;

    if (!database) {
      throw new Error('Database object is undefined. Connection may not be ready.');
    }

    // Check if the collection exists
    const collectionExists = await database.listCollections({ name: collectionName }).toArray();

    if (collectionExists.length) {
      await database.dropCollection(collectionName);
    }
  } catch (err) {
    throw err;
  }
};

