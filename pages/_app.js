import GlobalStyle from '../styles/GlobalStyles'
import fonts from '../styles/import.css'


export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
        <Component {...pageProps} />
    </>
  )
}
