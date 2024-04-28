
const express = require('express')

const app = express()
const port = 5001;

const listOfTasks=[
    {
        name:"Saludar",
        dueDate:'1 abr 2024'
    },
]


const addTask = e => {}


app.get('/', (req,res) => {
    console.log('Alguien nos está pidiendo un saludo')
    return res.send('Hola a todos')
})


app.get('/tasks', (req,res) => {
    console.log('Alguien nos está pidiendo un saludo')
    return res.send(listOfTasks)
})


app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})
