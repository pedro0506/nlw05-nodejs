import express from "express";

const app = express();

/**
 * GET = buscas
 * POST = Criação
 * PUT = Alteração
 * DELETE = Delete
 * PATCH = Alterar uma informação específica.
 */
app.get("/", (request, response) => {
    return response.json({
        message: "Olá NLW 05"
    });
});

app.post("/", (request, response) => {
    return response.json({ message: "Usuário salvo com sucesso!"});
})

app.listen(3333, () => console.log("Server is Running on port 3333"));