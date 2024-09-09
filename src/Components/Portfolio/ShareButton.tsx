import { FC, useState } from "react";
import { motion } from "framer-motion";
import { IonIcon } from "@ionic/react";
import { shareSocial, mailOutline, logoWhatsapp } from "ionicons/icons";
import "../../assets/css/ProjectStyles.css";
const ShareButton: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const currentUrl = window.location.href;

  // Function to handle email sharing
  const handleEmailShare = () => {
    const subject = "Check this out!";
    const body = `Take a look at this: ${currentUrl}`;
    window.location.href = `mailto:?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  // Function to handle WhatsApp sharing
  const handleWhatsAppShare = () => {
    const message = `${currentUrl}\n Check this out `;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const containerVariants = {
    closed: {
      width: "40px",
      transition: { type: "spring", stiffness: 500, damping: 30 },
    },
    open: {
      width: "130px",
      transition: { type: "spring", stiffness: 500, damping: 30 },
    },
  };

  return (
    <motion.button
      className="others-button"
      style={{
        display: "flex",
        alignItems: "center",
        borderRadius: "50px",
        padding: "8px",
        border: "1px solid var(--orange-yellow-crayola)",
        cursor: "pointer",
      }}
      onClick={() => setIsOpen(!isOpen)}
      variants={containerVariants}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
    >
      <IonIcon
        className="others"
        icon={shareSocial}
        style={{
          color: isOpen ? "var(--light-gray)" : "var(--vegas-gold)",
          fontSize: "24px",
          transition: "color 0.3s ease",
        }}
      />

      {/* Email and WhatsApp Icons - Appear when isOpen is true */}
      {isOpen && (
        <div style={{ display: "flex", marginLeft: "10px" }}>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            onClick={handleEmailShare}
          >
            <IonIcon
              icon={mailOutline}
              style={{
                color: "var(--vegas-gold)",
                fontSize: "24px",
                marginRight: "15px",
              }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            onClick={handleWhatsAppShare}
          >
            <IonIcon
              icon={logoWhatsapp}
              style={{
                color: "var(--vegas-gold)",
                fontSize: "24px",
              }}
            />
          </motion.div>
        </div>
      )}
    </motion.button>
  );
};

export default ShareButton;
