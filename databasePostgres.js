import { randomUUID } from "crypto";
import { sql } from "./db.js";


export class DatabasePostgres {
    
    async create(task) {
        const IDtask = randomUUID();
        const {name} = task 
       await sql`INSERT INTO tasks (id, name )VALUES (${IDtask}, ${name})`
       console.log('criou!')
    }
    async update(id, task){
        const {name} = task
        await sql `UPDATE tasks set name = ${name} WHERE id = ${id}`
        console.log('atualizado!')
    }
    async list(){
       const tasks =  await sql`SELECT * FROM tasks`
       return tasks
    }
    async delete(id){
        await sql`DELETE FROM tasks WHERE id = ${id}`
        console.log('deletado!')
    }
}