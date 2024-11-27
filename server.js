import { fastify } from "fastify";
import { DatabasePostgres } from "./databasePostgres.js";

const server = fastify()
const database = new DatabasePostgres

server.get('/', (request, reply) =>{
    console.log("video")
   return reply.status(201).send()
})
server.post('/add', (request, reply)=>{
    const {name} = request.body
    database.create({
        name: name 
    })
        
    return reply.status(201).send()
})
server.put('/update', (request, reply)=>{
    const {name} = request.body
    database.update({
        name : name
    })
    return reply.status(204).send()
})
server.delete('/delete',(request, reply)=>{
    console.log('bora deletar');
    return reply.status(201).send()
})
server.listen({
    port: 3333
})