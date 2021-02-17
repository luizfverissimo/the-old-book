import styled from 'styled-components'
import media from 'styled-media-query'
import { DownArrow, UpArrow } from "styled-icons/boxicons-solid"

export const SpellCardWrapper = styled.div`
  width: 100%;
  max-width: 31rem;
  height: fit-content;
  padding: 1.5rem;
  background-color: var(--purple);
  border-radius: 1.5rem;
  transition: all .2s ease;
  margin: 1rem 2rem 1rem 0;

  &:hover {
    transform: scale(1.05);
    filter: drop-shadow(0px 8px 4px rgba(0, 0, 0, 0.25));
    -webkit-font-smoothing: subpixel-antialiased;
  }

  &:last-child {
    margin-right: 0;
  }

  ${media.lessThan('large')`
    margin: 1rem 0;
    max-width: 85vw;
  `}
`

export const SpellCardHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const SpellCardTitleWrapper = styled.div`
  display: flex;
  width: ${props => props.expanded ? "100%" : "unset"};
  flex-direction:  ${props => props.expanded ? "row" : "column"};
  justify-content: ${props => props.expanded ? "space-between" : "center"};
`

export const SpellCardTitle = styled.h3`
  font-family: 'Rokkitt';
  font-weight: bold;
  margin: 0;
  color: var(--yellow);
  font-size: 2rem;
`

export const SpellCardInfo = styled.p`
  font-family: "Kanit", sans-serif;
  font-size: 1.2rem;
  font-style: italic;
  margin: 0;
`

export const ArrowDownIcon = styled(DownArrow)`
  display: ${props => props.expanded ? "none" : "unset"};
  color: var(--white);
  transition: all 0.2s ease;

  &:hover {
    color: var(--yellow);
    cursor: pointer;
  }
`

export const SpellCardStatsWrapper = styled.div`
  width: 100%;
  color: var(--light-yellow);
  font-family: "Kanit", sans-serif;
  font-size: 1rem;
  display: ${props => props.expanded ? "flex" : "none"};
  flex-direction: column;
  justify-content: center;
  margin-top: 1rem;

  p{
    margin: 0;

    strong {
      font-weight: 600;
    }
  }
`

export const SpellCardDesc = styled.div`
  width: 100%;
  color: var(--light-white);
  font-family: "Kanit", sans-serif;
  font-size: 1.2rem;
  display: ${props => props.expanded ? "flex" : "none"};
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 1rem;
  overflow-y: auto;
  max-height: 500px;

  p{
    margin-bottom: 1rem;

    strong {
      font-weight: 600;
    }
  }
`

export const SpellCardInteractionWrapper = styled.div`
  width: 100%;
  display: ${props => props.expanded ? "flex" : "none"};
  justify-content: flex-end;
  align-items: center;
  color: var(--light-yellow);
  font-family: "Kanit", sans-serif;
  font-size: 1.2rem;
  margin-top: 2rem;
  text-decoration: underline;

  a {
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      color: var(--yellow);
    }

    &:first-child {
      margin-right: 1rem;
    }
  }

`

export const UpIconWrapper = styled.div`
  width: 100%;
  display: ${props => props.expanded ? "flex" : "none"};
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
`

export const ArrowUpIcon = styled(UpArrow)`
  color: var(--white);
  transition: all 0.2s ease;

  &:hover {
    color: var(--yellow);
    cursor: pointer;
  }
`
