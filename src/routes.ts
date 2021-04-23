import { Router } from "express";
import { SettingsController } from "./controllers/SettingsController";
import { UsersController } from "./controllers/UsersController";
import { MessagesController } from "./controllers/MessagesController";

const routes = Router();

/**
 * Tipos de paramêtros
 * Routes Params => Paramêtros de rotas
 * http://localhost:3333/settings/1
 * Query Params => Filtros e Buscas
 * http://localhost:3333/?search=algumacoisa
 * Body params => {
 *  passa objetos dentro das requisições
 * }
 */

const settingsController = new SettingsController();
const usersController = new UsersController();
const messagesController = new MessagesController();

routes.post("/settings", settingsController.create);
routes.get("/settings/:username", settingsController.findByUsername);
routes.put("/settings/:username", settingsController.update);

routes.post("/users", usersController.create);
routes.post("/messages", messagesController.create);
routes.get("/messages/:id", messagesController.showByUser);


export { routes }