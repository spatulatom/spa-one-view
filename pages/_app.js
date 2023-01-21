import '@/styles/globals.css';
import SearchBar from '../components/search-bar';
import { ContextObjectProvider } from '../store/modal-data-context';
import Modal from '../components/modal.js';

export default function App({ Component, pageProps }) {
  return (
    <ContextObjectProvider>
      <SearchBar />
      <Modal />
      <Component {...pageProps} />
    </ContextObjectProvider>
  );
}
