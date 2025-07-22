import ContactMessage from "../modules/contact/model.js";
import ChatSession from "../modules/chatSession/model.js";
import ChatMessage from "../modules/chatMessage/model.js";

async function syncDB() {
  let retries = 5;
  while (retries) {
    try {
      await ContactMessage.sync({ alter: true });
      await ChatSession.sync({ alter: true });
      await ChatMessage.sync({ alter: true });
      console.log("✅ Todas las tablas están sincronizadas");
      break;
    } catch (err) {
      console.log("❌ Esperando DB, retrying...", retries);
      retries -= 1;
      await new Promise(res => setTimeout(res, 5000));
    }
  }
}

export default syncDB;
