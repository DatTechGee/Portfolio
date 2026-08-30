import { motion } from "motion/react";

const WHATSAPP_NUMBER = "2348103093734";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hello DatTechGee! I'd like to discuss a project with you."
);

const WhatsAppButton = () => {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
      initial={{ opacity: 0, scale: 0.5, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 400, damping: 25, delay: 0.3 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed left-6 bottom-8 z-50 flex items-center gap-2 rounded-full bg-[#25D366] pl-3 pr-4 py-2.5 text-white shadow-lg group"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="w-6 h-6 fill-current"
        aria-hidden="true"
      >
        <path d="M16.004 3C8.832 3 3 8.832 3 16.004c0 2.294.6 4.535 1.74 6.5L3 29l6.66-1.715a12.9 12.9 0 0 0 6.34 1.62h.006c7.17 0 13.002-5.832 13.002-13.004S23.175 3 16.004 3zm0 23.702c-1.95 0-3.86-.526-5.53-1.52l-.397-.236-4.104 1.057 1.09-4.0-.26-.408a10.6 10.6 0 0 1-1.622-5.641c0-5.87 4.776-10.646 10.65-10.646 2.84 0 5.512 1.108 7.522 3.12a10.58 10.58 0 0 1 3.114 7.528c0 5.872-4.776 10.648-10.65 10.648h-.003zm5.84-7.95c-.32-.16-1.884-.93-2.176-1.036-.292-.106-.505-.16-.717.16-.212.32-.82 1.036-1.005 1.248-.185.213-.37.24-.69.08-.32-.16-1.348-.497-2.567-1.584-.95-.847-1.59-1.892-1.777-2.211-.186-.32-.02-.493.14-.652.144-.144.32-.375.48-.562.16-.187.213-.32.32-.533.107-.213.053-.4-.027-.56-.08-.16-.717-1.727-.982-2.365-.258-.62-.52-.536-.717-.546l-.61-.01c-.212 0-.557.08-.848.4-.292.32-1.115 1.09-1.115 2.66 0 1.568 1.142 3.083 1.302 3.296.16.213 2.247 3.43 5.443 4.81.76.328 1.354.524 1.817.671.764.243 1.459.209 2.008.126.613-.092 1.884-.77 2.15-1.514.266-.744.266-1.382.186-1.514-.08-.133-.292-.213-.612-.373z"/>
      </svg>
      <span className="text-sm font-medium hidden sm:inline">Chat</span>
    </motion.a>
  );
};

export default WhatsAppButton;
