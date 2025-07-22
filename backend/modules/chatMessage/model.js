import { DataTypes } from "sequelize";
import db from "../../config/db.js";
import ChatSession from "../chatSession/model.js";

const ChatMessage = db.define("chat_message", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  session_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: ChatSession,
      key: "id",
    },
  },
  from: {
    type: DataTypes.ENUM("user", "bot"),
    allowNull: false,
  },
  text: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

// Asociación
ChatSession.hasMany(ChatMessage, { foreignKey: "session_id" });
ChatMessage.belongsTo(ChatSession, { foreignKey: "session_id" });

export default ChatMessage;
