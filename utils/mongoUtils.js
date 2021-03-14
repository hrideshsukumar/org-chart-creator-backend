const { MongoClient } = require("mongodb");
const uri =
    "mongodb+srv://admin:admin@cluster0.3lidy.mongodb.net/charts?retryWrites=true&w=majority";

// Create a new MongoClient
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

let _db;


module.exports = {

    connect: async () => {
        try {
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

    connectToServer: function (callback) {
        MongoClient.connect(url, { useNewUrlParser: true }, function (err, client) {
            _db = client.db('charts');
            return callback(err);
        });
    },

    getDb: () => {
        // console.log('getDb', _db);
        return _db;
    }
};