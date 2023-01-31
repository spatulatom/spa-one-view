import { createContext, useState } from 'react';
interface contextObjectModel {
  modalData: Boolean;
  showModal: (data: boolean) => void;
  closeModal: () => void;
}
// https://stackoverflow.com/questions/71948755/property-children-does-not-exist-on-type
type Props = {
  children: React.ReactNode;
};

const ContextObject = createContext<contextObjectModel>({
  modalData: false,
  showModal: function (data: Boolean) {},
  closeModal: function () {},
});

export const ContextObjectProvider: React.FC<Props> = ({ children }) => {
  const [activeModal, setActiveModal] = useState<Boolean>(false);

  function showModalHandler(data: Boolean) {
    setActiveModal(data);
  }

  function closeModalHandler() {
    setActiveModal(false);
  }

  const context: contextObjectModel = {
    modalData: activeModal, // { id, color, etc }
    showModal: showModalHandler,
    closeModal: closeModalHandler,
  };

  return (
    <ContextObject.Provider value={context}>{children}</ContextObject.Provider>
  );
};

export default ContextObject;
