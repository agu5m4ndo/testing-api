const { fork } = require('child_process')
const path = require('path')
const os = require('os').cpus().length;
const { loggerConsole } = require('../utils/logger');

const generateRandom = (req, res) => {
    console.log('port: ', process.argv[3]);
    // const amount = req.query.cant || 100000000;
    // const forked = fork(path.join(__dirname, 'services', 'computo.js'))
    // let object = {}
    // forked.send(amount)
    // forked.on('message', completed => {
    // object = completed;
    // res.status(200).json({ result: amount, object })
    // })
    const num = {
        num_random: Math.round(Math.random() * 1000000000),
        num_cpu: os
    }
    loggerConsole.info(`${req.originalUrl} ${req.method}`);
    res.status(200).json({ info: num })
}

module.exports = { generateRandom }