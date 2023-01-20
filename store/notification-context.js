import { createContext, useState, useEffect } from 'react';

const NotificationContext = createContext({
  modalData: null, 
  showModal: function (data) {},
  closeModal: function () {},
});

export function NotificationContextProvider(props) {
  const [activeModal, setActiveModal] = useState();

  

  function showModalHandler(data) {
    setActiveModal(data);
  }

  function closeModalHandler() {
    setActiveModal(null);
  }

  const context = {
    modalData: activeModal, // { title, message, status }
    showModal: showModalHandler,
    closeModal: closeModalHandler
  };

  return (
    <NotificationContext.Provider value={context}>
      {props.children}
    </NotificationContext.Provider>
  );
}

export default NotificationContext;