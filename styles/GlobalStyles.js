import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html,
  body {
  padding: 0;
  margin: 0;
  width: 100vw;
  min-height: 100vh;
  overflow-x: hidden;
  font-family: "Kanit", sans-serif;
  font-weight: normal;
  color: var(--white);
  font-size: 12px;
  background: linear-gradient(180deg, #2C232E 0%, #4B3D4F 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
}

body {
    --black: #1E1D1F;
    --purple: #57425E;
    --light-purple: #76617D;
    --light-yellow: #FCF4BE;
    --yellow:#FAB037;
    --white: #E5E5E5;
    --modal-bg: rgba(69, 59, 72, 0.90);
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}

li {
  list-style: none;
}

`;

export default GlobalStyle;