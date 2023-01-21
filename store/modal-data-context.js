import { createContext, useState, useEffect } from 'react';

const ContextObject = createContext({
  modalData: null,
  showModal: function (data) {},
  closeModal: function () {},
});

export function ContextObjectProvider(props) {
  const [activeModal, setActiveModal] = useState();

  function showModalHandler(data) {
    setActiveModal(data);
  }

  function closeModalHandler() {
    setActiveModal(null);
  }

  const context = {
    modalData: activeModal, // { id, color, etc }
    showModal: showModalHandler,
    closeModal: closeModalHandler,
  };

  return (
    <ContextObject.Provider value={context}>
      {props.children}
    </ContextObject.Provider>
  );
}

export default ContextObject;
