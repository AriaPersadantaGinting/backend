import express from "express";
import siladiController from "../controller/siladi-controller.js";

export const publicApi = new express.Router();

// Endpoint POST untuk webhook
publicApi.post("/api/webhook/kirimi", siladiController.webhookController);

// Endpoint GET untuk verifikasi (opsional, kalau WhatsApp API resmi)
publicApi.get("/api/webhook/kirimi", (req, res) => {
  const VERIFY_TOKEN = "siladi-secret"; // bisa pakai ENV

  const mode = req.query["hub.mode"];
  const token = req.query["hub.verify_token"];
  const challenge = req.query["hub.challenge"];

  if (mode && token && mode === "subscribe" && token === VERIFY_TOKEN) {
    console.log("✅ Webhook verified");
    res.status(200).send(challenge);
  } else {
    res.status(403).send("Forbidden");
  }
});
