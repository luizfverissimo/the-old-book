import styled from 'styled-components';
import { FilterAlt } from 'styled-icons/boxicons-regular';

export const FilterWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-family: 'Kanit', sans-serif;
  font-size: 1.5rem;
  color: var(--light-purple);
  padding-right: 3rem;
  margin-bottom: 1rem;
  position: relative;
`;
export const FilterIconWrapper = styled.div`
  width: 63px;
  height: 63px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.active ? 'var(--yellow)' : 'var(--purple)'};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 1.5rem;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.05);
    filter: drop-shadow(0px 8px 4px rgba(0, 0, 0, 0.25));
    -webkit-font-smoothing: subpixel-antialiased;
  }
`;

export const FilterIcon = styled(FilterAlt)`
  color: ${(props) => (props.active ? 'var(--purple)' : 'var(--yellow)')};
`;

export const FilterItemsWrapper = styled.ul`
  padding: 1.5rem;
  border-radius: 1rem;
  background-color: var(--black);
  font-family: 'Kanit', sans-serif;
  font-size: 1.3rem;
  color: var(--white);
  position: absolute;
  top: 5rem;
  z-index: 10;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;

  li {
    transition: all 0.2s ease;
    margin: 0.5rem 0;
    &:hover {
      color: var(--yellow);
    }
  }
`