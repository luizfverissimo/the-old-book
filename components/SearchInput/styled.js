import styled from 'styled-components'
import media from 'styled-media-query';

export const SearchInput = styled.input`
  width: 20rem;
  padding: 1rem;
  background-color: transparent;
  border-radius: 1rem;
  border: solid 1px var(--light-purple);
  font-family: "Kanit", sans-serif;
  font-size: 1.5rem;
  color: var(--light-purple);
  outline: 0;
  transition: all 0.2s ease;
  margin-right: 3rem;

  &::placeholder {
    color: var(--light-purple);
  }

  &:hover {
    border: 1px solid var(--white);
  }

  &:focus {
    color: var(--yellow);
    border: 1px solid var(--yellow);
  }
`

export const SearchResultWrapper = styled.ul`
  width: 20rem;
  padding: 1.5rem;
  background-color: var(--black);
  position: absolute;
  top: 6rem;
  right: 8.5rem;
  border-radius: 1rem;
  font-family: 'Kanit', sans-serif;
  font-size: 1.3rem;
  color: var(--white);
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${media.lessThan('large')`
    top: 14vh;
    left: 14vw;
  `}

  li {
    cursor: pointer;
    margin: 0.5rem 0;

    &:hover {
      color: var(--yellow);
    }
  }
`