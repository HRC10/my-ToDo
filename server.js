import { fastify } from "fastify";


const server = fastify()



server.get('/', (request, reply) =>{
    console.log("video")
   return reply.status(201).send()
})
server.post('/add', (request, reply)=>{
    console.log('bora criar!');
    return reply.status(200).send()
})
server.put('/update', (request, reply)=>{
    console.log('atualizado');
    return reply.status(204).send()
})
server.delete('/delete',(request, reply)=>{
    console.log('bora deletar');
    return reply.status(201).send()
})
server.listen({
    port: 3333
})