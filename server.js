const http = require("http");
const port = 3000;
const rotas = {
  "/": "Curso de node",
  "/livro": "Livros",
  "/autores": "autores",
  "/editora": "editora",
};
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-type": "text/plain" });
  res.end(rotas[req.url]);
});

server.listen(port, () => {
  console.log("servidor escutando na porta" + port);
});
