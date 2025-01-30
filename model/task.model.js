import pool from '../DB/db-cinfig.js';

export default class Task{
    constructor(id, title,descriptioon, status, date,priorityId){
        this.id = id;
        this.title = title;
        this.descriptioon = descriptorioon;
        this.status = status;
        this.date = date;
        this.priorityId = priorityId;
    }
    static create(task){
        return new Promise((resolve , reject)=>{
            pool.getConnection((err,con)=>{
                if(!err){
                    let sql = "insert into task (title
                }
            })
        })
    }

}