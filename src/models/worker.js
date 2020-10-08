const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const WorkerSchema = new Schema({
    title: String,
    decision: String,
    expiry: String,
    reward: String,
    workers: String,
    date: {
        type: String,
        default: Date.now()
    }
});

const Worker = mongoose.model('Worker', WorkerSchema);

module.exports = Worker;