import siladiService from "../service/siladi-service.js";

const webhookController = async (req, res) => {
  const { event, from, message, status, notification } = req.body;

  switch (event) {
    case "message.received":
      console.log(`📩 Pesan dari ${from}: ${message}`);

      // Panggil service untuk respon
      const reply = siladiService.siladiServices(message);
      return res.json({ reply });

    case "device.status":
      console.log(`📱 Status perangkat: ${status}`);
      return res.json({ status: "ok" });

    case "system.notification":
      console.log(`🔔 Notifikasi sistem: ${notification}`);
      return res.json({ status: "ok" });

    default:
      console.log("❓ Event tidak dikenal:", event);
      return res.json({ status: "ignored" });
  }
};

export default {
  webhookController,
};
