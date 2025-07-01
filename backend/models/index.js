// backend/models/index.js
import ContactMessage from "../modules/contact/model.js";

async function syncDB() {
  let retries = 5;
  while (retries) {
    try {
      await ContactMessage.sync();
      console.log("✅ Tabla sincronizada");
      break;
    } catch (err) {
      console.log("❌ Esperando DB, retrying...", retries);
      retries -= 1;
      await new Promise(res => setTimeout(res, 5000));
    }
  }
}

export default syncDB;
