const { MongoClient } = require("mongodb");

let _db;


module.exports = {

    connect: async () => {
        try {
            // Create a new MongoClient
            const client = new MongoClient(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });

            // Connect the client to the server
            await client.connect();

            _db = client.db('charts');

            // console.log('connect', _db);
            // Establish and verify connection
            await _db.command({ ping: 1 });

            console.log("Connected successfully to server");
        } finally {
            // Ensures that the client will close when you finish/error
            // await client.close();
        }
    },

    getDb: () => {
        // console.log('getDb', _db);
        return _db;
    }
};