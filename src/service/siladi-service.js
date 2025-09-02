import { Information } from "../util/util-information.js";

const siladiServices = (message) => {
  if (!message) return "Pesan tidak boleh kosong.";

  const normalized = message.trim().toUpperCase();

  switch (normalized) {
    case "MENU":
    case "BANTUAN":
      return "OK"; // nanti bisa diganti dengan menu detail
    default:
      return Information.greeting;
  }
};

export default {
  siladiServices,
};
