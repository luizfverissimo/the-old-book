import GlobalStyle from '../styles/GlobalStyles';
import fonts from '../styles/import.css';

import { AppContext } from '../context/AppContext';

export default function App({ Component, pageProps }) {
  return (
    <AppContext>
      <GlobalStyle />
      <Component {...pageProps} />
    </AppContext>
  );
}
