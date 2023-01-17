import '@/styles/globals.css';
import SearchBar from '../components/search-bar';

export default function App({ Component, pageProps }) {
  return (
    <div>
      <SearchBar />
      <Component {...pageProps} />
    </div>
  );
}
