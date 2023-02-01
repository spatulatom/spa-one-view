import '../styles/globals.css';
import SearchBar from '../components/search-bar';
import { ContextObjectProvider } from '../store/modal-data-context';
import Modal from '../components/modal';
import { AppProps } from 'next/app';

export default function App({ Component, pageProps } :AppProps) {
  return (
    <ContextObjectProvider>
      <SearchBar />
      <Modal />
      <Component {...pageProps} />
    </ContextObjectProvider>
  );
}
