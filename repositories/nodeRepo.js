const mongoUtils = require('../utils/mongoUtils');

const getCollection = () => {
    return mongoUtils.getDb().collection('nodes');
};

const saveOrUpdate = (search, updateInfo) => {
    return getCollection().update(search, { $set: updateInfo }, { upsert: true })
}

const getNodes = (query = {}) => {
    return new Promise((resolve, reject) => {
        getCollection().find(query).toArray((err, result) => {
            if (err) reject(err);
            resolve(result);
        })
    })
}

module.exports = {
    getCollection,
    saveOrUpdate,
    getNodes
}