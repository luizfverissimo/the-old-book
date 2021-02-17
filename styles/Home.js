import styled from 'styled-components'
import media from 'styled-media-query'

export const Content = styled.main`
  width: 100vw;
  height: auto;
  max-width: 1200px;
`

export const SpellCardGridWrapper = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-bottom: 3rem;
  /* display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem; */

  ${media.lessThan('large')`
    flex-wrap: nowrap;
    flex-direction: column;
    align-items: center;
  `}
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