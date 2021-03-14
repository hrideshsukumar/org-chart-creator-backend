
const nodeService = require('../services/nodeServices');

exports.charts_create_post = (req, res) => {
    const nodes = req.body;
    const result = nodeService.bulkInsert(nodes);
    res.send(result);
}

exports.charts_list = async (req, res) => {
    const result = await nodeService.getNodes();
    res.send(result);
}