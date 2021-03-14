const mongoUtils = require('../utils/mongoUtils');

const getCollection = () => {
    return mongoUtils.getDb().collection('nodes');
};

const saveOrUpdate = (search, updateInfo) => {
    return getCollection().update(search, { $set: updateInfo }, { upsert: true })
}

module.exports = {
    getCollection,
    saveOrUpdate
}