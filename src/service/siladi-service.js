import { Information } from "../util/util-information.js";

const siladiServices = async (message) => {
  if (message === "MENU" || message === "BANTUAN") {
    return "OK";
  } else {
    return Information.greeting();
  }
};

export default {
  siladiServices,
};
