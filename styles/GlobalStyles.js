import { createGlobalStyle } from 'styled-components'
import media from 'styled-media-query'

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

  ${media.lessThan('large')`
    font-size: 10px;
  `}
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

/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: var(--purple); 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: var(--light-purple);
  border-radius: 4px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: var(--black); 
}

`;

export default GlobalStyle;