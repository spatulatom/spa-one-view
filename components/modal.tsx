import React, { useContext } from 'react';
import ContextObject from '../store/modal-data-context';

export default function Modal() {
  const contextObject = useContext(ContextObject);
  const activeModal = contextObject.modalData;

  return (
    activeModal && (
      <div>
        <div
          className="fixed inset-0 z-9 bg-black bg-opacity-50 duration-1000 transition-opacity"
          onClick={contextObject.closeModal}
        >
          <div className="flex relative z-20 min-h-full items-end justify-center text-center sm:items-center sm:p-0">
            {/* stopPropagation prevents child elements from inheriting parent events like onClick */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all duration-1000 sm:my-8 mx-2 my-8 w-full sm:max-w-lg"
            >
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div
                    className={`mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full sm:mx-0 sm:h-10 sm:w-10`}
                    style={{ backgroundColor: `${activeModal.color}` }}
                  ></div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3
                      className="text-lg font-medium leading-6 text-gray-900"
                      id="modal-title"
                    >
                      {activeModal.year}
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Item id: {activeModal.id}
                      </p>
                      <p className="text-sm text-gray-500">
                        Item name: {activeModal.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        Item year: {activeModal.year}
                      </p>
                      <p className="text-sm text-gray-500">
                        Item color: {activeModal.color}
                      </p>
                      <p className="text-sm text-gray-500">
                        Item pantone value: {activeModal.pantone_value}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  onClick={contextObject.closeModal}
                  type="button"
                  className="inline-flex w-full justify-center rounded-md border border-transparent bg-gray-700 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
