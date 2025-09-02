import express from "express";
import { publicApi } from "../router/publicApi.js";

export const app = express();

// Middleware untuk parsing JSON
app.use(express.json({ limit: "5mb" }));

// Routing
app.use(publicApi);

// Middleware error handling (catch all)
app.use((err, req, res, next) => {
  console.error("🔥 Error:", err.message);
  res.status(500).json({ success: false, error: "Internal server error" });
});
