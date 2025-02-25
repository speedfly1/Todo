//app.js
import express from 'express';
import GetTodosCommand from './GetTodos/Gateway/GetTodosCommandGateway.js';
import GetTodoCommand from './GetTodo/Gateway/GetTodoCommandGateway.js';
import SaveTodoCommand from './SaveTodo/Gateway/SaveTodoCommandGateway.js';
import UpdateTodoCommand from './UpdateTodo/Gateway/SaveTodoCommandGateway.js'
import UpdateTodoStatusCommand from './UpdateStatus/Gateway/UpdateTodoStatusCommandGateway.js'
import DeleteTodoCommand from './DeleteTodo/Gateway/DeleteTodoCommandGateway.js'
import eventEmitterClass from './IOC/eventEmitter.js'
import todoUpdatedConsumer from './Consumer/todoUpdatedConsumer.js'
import TodoUpdated from './SSE/TodoUpdated.js'
import cors from 'cors';


const app = express();
const PORT = 3000;


app.use(cors({
    origin: [
      'http://localhost:4200',         //this is my front-end url for development
      'http://x.x.x.x:4200'
    ]
  }))
  app.use(express.json());

todoUpdatedConsumer.consume();

app.get('/todos', async (req, res)=>{
    res.status(200);
    res.send(await new GetTodosCommand().Execute(req));
});

app.get('/todo/:id', async (req, res)=>{
    res.status(200);
    res.send(await new GetTodoCommand().Execute(req,res));
});

app.post('/todo', async (req,res) => {
    res.status(200);
    res.send(await new SaveTodoCommand().Execute(req,res));
    eventEmitterClass.publishEvent('todoupdate');
});

app.put('/todo', async (req,res) => {
    res.status(200);
    var result = await new UpdateTodoCommand().Execute(req,res)
    eventEmitterClass.publishEvent('todoupdate');
    res.send(result);
});

app.patch('/todo', async (req,res) => {
    res.status(200);
    var result = await new UpdateTodoStatusCommand().Execute(req,res)
    eventEmitterClass.publishEvent('todoupdate');
    res.send(result);
});

app.delete('/todo/:id', async (req,res) => {
    res.status(200);
    res.send(await new DeleteTodoCommand().Execute(req,res));
});

app.get('/events', (req, res) => {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders(); // Important to keep the connection alive

    const boundFunction = () => TodoUpdated.todoupdate(res);

    todoUpdatedConsumer.consumeWithFunc(boundFunction);
  });
  


app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }

);

