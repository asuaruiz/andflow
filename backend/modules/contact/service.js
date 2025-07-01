import ContactMessage from "./model.js";

export const guardarMensaje = async (data) => {
  return await ContactMessage.create(data);
};
