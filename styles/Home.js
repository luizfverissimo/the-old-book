import styled from 'styled-components'

export const Content = styled.main`
  width: 100vw;
  height: auto;
  max-width: 1200px;
`

export const SpellCardGridWrapper = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 3rem;
  /* display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem; */
`

export const NoCharMessage = styled.h2`
  text-align: center;
  color: var(--light-purple);
  font-family: 'Kanit', sans-serif;
  font-size: 3rem;
  font-weight: bold;
  margin: 6rem 0;
`

export const NoSpellsMessage = styled.h2`
  width: 100%;
  text-align: center;
  color: var(--light-purple);
  font-family: 'Kanit', sans-serif;
  font-size: 2rem;
  font-weight: bold;
  margin: 6rem 0;
`

export const FooterWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  max-width: 1200px;
  color: var(--light-purple);
  font-family: 'Kanit', sans-serif;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  a {
    text-decoration: underline;
  }
`