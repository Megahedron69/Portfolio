import { type FC, useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { IonIcon } from "@ionic/react";
import { closeOutline } from "ionicons/icons";
import FeaturesComponent, { FeatureRenderer } from "./FeatureList";
import { EcosorterFeature, FeatureDetail } from "../../Utils/FeatsAndInfo";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  projLogo: string | string[] | undefined;
  projTitle: string;
  feature: FeatureDetail | EcosorterFeature;
};

const Modal: FC<ModalProps> = ({
  isOpen,
  onClose,
  projLogo,
  projTitle,
  feature,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  if (projTitle.includes("Companion")) projTitle = "Companion";
  const handleScroll = useCallback((e: Event) => {
    const target = e.target as HTMLElement;
    setIsScrolled(target.scrollTop > 0);
  }, []);

  useEffect(() => {
    const modalElement = document.querySelector(".modal");
    if (isOpen && modalElement) {
      modalElement.addEventListener("scroll", handleScroll);
      return () => modalElement.removeEventListener("scroll", handleScroll);
    }
  }, [isOpen, handleScroll]);

  if (!isOpen) return null;

  return (
    <div className="backdrop" onClick={onClose}>
      <motion.div
        className="modal"
        onClick={(e) => e.stopPropagation()}
        initial={{ y: "-100vh", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "100vh", opacity: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <div
          className={`modal-header ${
            isScrolled && isOpen ? "scroll-header" : ""
          }`}
        >
          <div className="logo-container">
            <img src={projLogo} alt="logo" />
          </div>
          <div className="modal-header-title">
            <h3>{projTitle}</h3>
            <span>About this project</span>
          </div>
          <div onClick={onClose} className="close-button">
            <IonIcon icon={closeOutline} />
          </div>
        </div>
        <div className="modal-text">
          <FeaturesComponent features={feature} />
        </div>
      </motion.div>
    </div>
  );
};

export default Modal;
