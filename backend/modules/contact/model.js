import { DataTypes } from "sequelize";
import db from "../../config/db.js";

const ContactMessage = db.define("ContactMessage", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  nombre: { type: DataTypes.STRING, allowNull: false },
  correo: { type: DataTypes.STRING, allowNull: false },
  telefono: { type: DataTypes.STRING },
  mensaje: { type: DataTypes.TEXT, allowNull: false },
  interes: { type: DataTypes.STRING },
  origen: { type: DataTypes.STRING },
  utm_source: { type: DataTypes.STRING },
  ip: { type: DataTypes.STRING },
  user_agent: { type: DataTypes.TEXT },
  fecha: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
}, {
  tableName: "contact_messages",
  timestamps: false,
});

export default ContactMessage;
