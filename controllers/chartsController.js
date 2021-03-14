
const nodeService = require('../services/nodeServices');

exports.charts_create_post = async (req, res) => {
    try {
        const nodes = req.body;
        const result = await nodeService.bulkInsert(nodes);
        res.send({
            message: 'Chart saved successfully'
        });
    } catch (e) {
        res.status(400).send({
            message: 'Save chart failed'
        })
    }
}

exports.charts_list = async (req, res) => {
    const result = await nodeService.getNodes();
    res.send(result);
}