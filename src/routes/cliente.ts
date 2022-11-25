import { Router } from "express";
import { cliente } from "../controllers";
const routes = Router();

routes.post('/', cliente.create);
routes.put('/', cliente.update);
routes.delete('/', cliente.delete);
routes.get('/:status', cliente.list);

export default routes;