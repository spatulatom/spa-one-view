import { createContext, useState } from 'react';
type Item = {
  color: string;
  name: string;
  year: string;
  pantone_value: string;
  id: string;
};
interface contextObjectModel {
  modalData: Item|null;
  showModal: (data: Item) => void;
  closeModal: () => void;
}
// https://stackoverflow.com/questions/71948755/property-children-does-not-exist-on-type
type Props = {
  children: React.ReactNode;
};

const ContextObject = createContext({} as contextObjectModel)


export const ContextObjectProvider: React.FC<Props> = ({ children }) => {
  const [activeModal, setActiveModal] = useState<Item|null>(null);

  function showModalHandler(data:Item) {
    setActiveModal(data);
  }

  function closeModalHandler() {
    setActiveModal(null);
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
