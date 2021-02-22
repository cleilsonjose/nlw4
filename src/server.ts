import express from 'express';

const app = express();

app.get("/", (request, response) => {

  return response.json({ message : "Olá!!"});
})

app.post("/", (request, response) => {
  return response.json({ message: "Os dados foram salvos com sucesso" });
})

app.listen(8000, () => console.log("Server is Runnnig!!"));