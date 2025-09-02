import express from "express";
import { publicApi } from "../router/publicApi.js";

export const app = express();

app.use(express.json());

app.use(publicApi);
