const { format } = require('path');
const nodeRepo = require('../repositories/nodeRepo');

const bulkInsert = async (nodes) => {
    try {
        for (const node of nodes) {
            await nodeRepo.saveOrUpdate({ id: node.id }, node);
        }
        return true;
    } catch (e) {
        throw e;
    }
}

const getNodes = async () => {
    const result = await nodeRepo.getNodes();
    console.log('getNodes result', result);
    return result;
}

module.exports = {
    bulkInsert,
    getNodes
}