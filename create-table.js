import { sql } from './db.js'

sql `
    CREATE TABLE tasks (
     id         TEXT PRIMARY KEY,
     name       TEXT
    );
`.then(() => {
    console.log('criou!');
})