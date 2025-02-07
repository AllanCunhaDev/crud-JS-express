import express from 'express';
import userController from '../src/controllers/user.js';




const app = express();
const PORT = 3000
const runningMsg = `Servidor rodando na porta ${PORT}`



app.use('/user', userController)


app.listen(PORT, () => {console.log(runningMsg);})
