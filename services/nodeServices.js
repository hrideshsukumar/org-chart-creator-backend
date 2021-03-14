const { format } = require('path');
const nodeRepo = require('../repositories/nodeRepo');

const bulkInsert = (nodes) => {
    const result = nodes.map(node => {
        return nodeRepo.saveOrUpdate({ id: node.id }, node);
    })
    return result;
}

module.exports = {
    bulkInsert
}