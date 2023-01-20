import '@/styles/globals.css';
import SearchBar from '../components/search-bar';
import { NotificationContextProvider } from '../store/notification-context';
import Modal from '../components/modal.js'

export default function App({ Component, pageProps }) {
  return (
    <NotificationContextProvider>
      <SearchBar />
      <Modal/>
      <Component {...pageProps} />
    </NotificationContextProvider>
  );
}
