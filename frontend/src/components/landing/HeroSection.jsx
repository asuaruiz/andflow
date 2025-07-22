import React from "react";
import { FaWhatsapp, FaTelegramPlane, FaFacebookMessenger, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Lottie from "lottie-react";
import chatbotAnimation from "../../assets/lottie/chatbot.json";
import ChatWidget from "./ChatWidget"; // <-- Nuevo import

function HeroSection({ onAbrirModal }) {
  return (
    <section
      id="inicio"
      className="bg-gradient-to-b from-[#084C61] to-[#018453] text-white min-h-screen flex items-center px-6 py-12 font-[Rubik]"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LADO IZQUIERDO: TEXTO */}
        <div>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6">
            Automatiza tareas repetitivas <br />
            y gana tiempo para hacer crecer tu negocio
          </h1>

          <p className="text-lg text-white/90 mb-6">
            Conecta WhatsApp, Shopify, Gmail, Telegram y más… sin escribir una sola línea de código.
          </p>

          {/* CARACTERÍSTICAS */}
          <div className="grid sm:grid-cols-2 gap-3 text-white text-sm mb-8">
            <Feature icon={<FaWhatsapp size={18} />} text="Responde automáticamente por WhatsApp" />
            <Feature icon={<MdEmail size={18} />} text="Crea tareas en Trello desde emails" />
            <Feature icon={<FaTelegramPlane size={18} />} text="Envía recordatorios por Telegram" />
            <Feature icon={<FaFacebookMessenger size={18} />} text="Mensajes de bienvenida por Facebook" />
            <Feature icon={<FaInstagram size={18} />} text="Alertas de mensajes en Instagram" />
          </div>

          <p className="text-sm text-green-200 mb-6">
            Hazlo tú o deja que <span className="text-white font-bold">Andflow</span> lo haga por ti
          </p>

          {/* BOTÓN QUE ABRE EL MODAL */}
          <button
            onClick={onAbrirModal}
            className="bg-white text-[#018453] font-semibold px-6 py-3 rounded-lg shadow hover:bg-green-100 transition"
          >
            Quiero automatizar mi negocio
          </button>
        </div>

        {/* LADO DERECHO: ANIMACIÓN + CHAT REAL */}
        <div className="w-full flex flex-col items-center gap-6">
          <div className="w-full flex justify-center -mt-10">
    <       div className="w-[85%] max-w-[300px]">
              <Lottie animationData={chatbotAnimation} loop={true} />
            </div>
        </div>

          {/* WIDGET DE CHAT */}
          <div className="w-full max-w-md">
            <ChatWidget />
          </div>
        </div>
      </div>
    </section>
  );
}

function Feature({ icon, text }) {
  return (
    <div className="flex items-start space-x-2">
      <div className="text-green-300 mt-1">{icon}</div>
      <span className="text-white">{text}</span>
    </div>
  );
}

export default HeroSection;
