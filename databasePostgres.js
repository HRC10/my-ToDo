import { randomUUID } from "crypto";
import { sql } from "./db.js";


export class DatabasePostgres {
    
    async create(task) {
        const IDtask = randomUUID();
        const {name} = task 
       await sql`INSERT INTO tasks (id, name )VALUES (${IDtask}, ${name})`
       console.log('criou!')
    }
    async update(task){
        const {id, name} = task
        sql` UPDATE `
    }
}