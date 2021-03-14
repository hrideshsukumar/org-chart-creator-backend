
const nodeService = require('../services/nodeServices');

exports.charts_create_post = async (req, res) => {
    const nodes = req.body;
    const result = nodeService.bulkInsert(nodes);
    res.send(result);
}