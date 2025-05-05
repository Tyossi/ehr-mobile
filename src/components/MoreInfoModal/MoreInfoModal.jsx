import { ReactComponent as CloseIcon } from "../../assets/icons/close-icon.svg";
import { AnimatePresence, motion } from "framer-motion";

import "./moreInfoModal.css";
const MoreInfoModal = (props) => {
  const { isOpen, onClose, title, children, height, noBorderRadius } = props;
  console.log({ height });
  return (
    <AnimatePresence>
      <div
        className={`more__info__modal__container ${
          isOpen ? "active__modal" : ""
        }`}
        onClick={onClose}
      />
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: isOpen ? "0%" : "100%" }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
        className="info__modal__content"
        style={{
          height: height ? height : "",
          borderRadius: noBorderRadius ? "0" : "",
        }}
      >
        <div className="info__modal__title__and__close">
          <p className="info__title">{title}</p>
          <CloseIcon onClick={onClose} />
        </div>
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default MoreInfoModal;
