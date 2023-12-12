import React, { useState } from "react";
import ModalTariffs from "../modalTariffs/modalTariffs";
import Modal from "../modal/modal";

const Tariffs = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <main className="main">
      <Modal open={open} onClose={handleClose}>
        <ModalTariffs />
      </Modal>
      <div>
        <p>Осталось 3/3 презентаций</p>
        <button onClick={() => setOpen(true)}>Получить больше</button>
      </div>
    </main>
  );
};

export default Tariffs;
