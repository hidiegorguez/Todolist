const express = require('express');

const app = express();
const port = 5001;

const cors = require('cors');

app.use(cors()); // everyone can get
app.use(express.json()); // everyone can post

let listOfTasks = [];

app.get('/tasks', (req, res) => {
    return res.json(listOfTasks);
});

app.post('/tasks', (req, res) => {
    const newTask = req.body;
    listOfTasks.push(newTask);
    console.log(`Task created with id ${req.body.id}`)
    return res.json('Task added');
});

app.delete('/tasks/:taskId', (req, res) => {
    console.log(`Someone wants to delete a task: ${req.params.taskId}`)
    console.log(`Now we have these tasks: ${JSON.stringify(listOfTasks, null, 2)}`)
    const initialLength = listOfTasks.length;
    listOfTasks= listOfTasks.filter(task => task.id !== req.params.taskId);
    if (listOfTasks.length === initialLength) {
        console.log('Task not found')
        return res.status(404).json({ message: 'Task not found' });
    }
    else {
        console.log('Task deleted')
        return res.json('Task deleted');
    }

});


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
