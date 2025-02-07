const express = require('express');

const app = express();
const PORT = 3000
const runningMsg = `Servidor rodando na porta ${PORT}`

app.get('/', (req, res) => {
    console.log("logado!")
    res.send(runningMsg);
})

app.post('/', (req, res) => {
    res.send("app post");
})

app.delete('/', (req, res) => {
    res.send("app delete");
})

app.listen(PORT, () => {console.log(runningMsg);})
