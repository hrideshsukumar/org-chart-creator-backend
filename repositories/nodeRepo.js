const mongoUtils = require('../utils/mongoUtils');

const getCollection = () => {
    return mongoUtils.getDb().collection('nodes');
};

const saveOrUpdate = async (filter, updateDoc) => {
    try {
        return await getCollection().updateOne(filter, { $set: updateDoc }, { upsert: true })
    } catch (e) {
        throw e;
    }
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