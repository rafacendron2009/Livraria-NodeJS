import express from "express";
const app = express();
const livros = [
  { id: 1, titulo: "senhor dos aneis" },
  { id: 2, titulo: "hobit" },
];

app.get('/', (req,res) =>{
    res.status(200).send("Curso Node")
})

app.get('/livro', (req,res) =>{
    res.status(200).json(livros)
})

export default app