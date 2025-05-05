import React from "react";

const ModalDrawer = ({ children }) => {
  return (
    <AnimatePresence>
      <div
        className={`more__info__modal__container ${
          isOpen ? "active__modal" : ""
        }`}
        onClick={setShowMoreInfo}
      />
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: isOpen ? "0%" : "100%" }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
        className="info__modal__content"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default ModalDrawer;
