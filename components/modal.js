import React, { useContext } from 'react';
import NotificationContext from '../store/notification-context';

export default function modal() {
  const notificationCtx = useContext(NotificationContext);
  const activeModal = notificationCtx.modalData;
  return (activeModal&&<div onClick={notificationCtx.closeModal}>modal</div>);
}
