import express, { response } from "express";

const app = express();

app.get("/status", (request, tesponse) => {
  return response.json({
    message: "Aplicação online",
  });
});

app.listen(3333);
