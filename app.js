import express from 'express';
import AdminRouter from './route/admin.route.js';
import TaskRouter from './route/task.route.js';
import  bodyParser from 'body-parser';
const app = express();

app.set('view engine', 'ejs');
app.use(express.static("./public"));
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
// localhost:8000/admin/sign-in
app.use('/admin',AdminRouter);
app.use('/task',TaskRouter);

app.listen(8000,()=>{
    console.log("http://localhost:8000");
})

