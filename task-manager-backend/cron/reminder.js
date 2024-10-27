const cron = require('node-cron');
const Task = require('../models/Task');

cron.schedule('*/1 * * * *', async () => {
    const tasks = await Task.find({ due_date: { $lte: new Date(Date.now() + 24 * 60 * 60 * 1000) }, completed: false });
    tasks.forEach(task => {
        console.log(`Reminder: Task "${task.title}" is due soon!`);
    });
});
