import { DataTypes } from "sequelize";
import db from "../../config/db.js";

const ChatSession = db.define("chat_session", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  telefono: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default ChatSession;
