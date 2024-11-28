import { fastify } from "fastify";
import { DatabasePostgres } from "./databasePostgres.js";

const server = fastify()
const database = new DatabasePostgres

server.get('/', (request, reply) =>{
     const tasks = database.list()
    return tasks
})
server.post('/add', (request, reply)=>{
    const {name} = request.body
    database.create({
        name: name 
    })
        
    return reply.status(201).send()
})
server.put('/update/:id', (request, reply)=>{
    const IDtask = request.params.id  

    const {name} = request.body

    database.update(IDtask,{
        name : name
    })
    return reply.status(204).send()
})
server.delete('/delete/:id',(request, reply)=>{
    const IDtask = request.params.id
    database.delete(IDtask)
    return reply.status(201).send()
})
server.listen({
    port: 3333
})