const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    due_date: { type: Date, required: true },
    completed: { type: Boolean, default: false },
    priority: { type: String, enum: ['low', 'medium', 'high'], required: true },
    recurrence: { type: String, enum: ['daily', 'weekly', 'monthly'], default: null }
});

module.exports = mongoose.model('Task', taskSchema);
