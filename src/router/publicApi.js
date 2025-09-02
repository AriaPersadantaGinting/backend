import express from "express";
import siladiController from "../controller/siladi-controller.js";

export const publicApi = new express.Router();

publicApi.post("/webhook/kirimi", siladiController.webhookController);
