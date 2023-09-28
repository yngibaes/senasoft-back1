import { Router } from "express";
import { postSignup } from "../controlador/contralador.js";

const router=Router();

router.post("/formulario",postSignup);//crea tarea

export default router