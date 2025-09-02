import siladiService from "../service/siladi-service.js";

const webhookController = async (req, res) => {
  try {
    const { event, from, message, status, notification } = req.body;

    switch (event) {
      case "message.received":
        console.log(`📩 Pesan dari ${from}: ${message}`);

        const reply = siladiService.siladiServices(message);
        return res.status(200).json({ success: true, reply });

      case "device.status":
        console.log(`📱 Status perangkat: ${status}`);
        return res.status(200).json({ success: true, status: "ok" });

      case "system.notification":
        console.log(`🔔 Notifikasi sistem: ${notification}`);
        return res.status(200).json({ success: true, status: "ok" });

      default:
        console.log("❓ Event tidak dikenal:", event);
        return res.status(200).json({ success: false, status: "ignored" });
    }
  } catch (error) {
    console.error("❌ Webhook error:", error);
    return res
      .status(500)
      .json({ success: false, error: "Internal server error" });
  }
};

export default {
  webhookController,
};
