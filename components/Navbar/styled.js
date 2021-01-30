import styled from 'styled-components';
import { User } from 'styled-icons/boxicons-solid';
import { GearFill } from 'styled-icons/bootstrap'

export const NavbarWrapper = styled.nav`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 0;
`;

export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 2rem;
`;

export const LogoTitle = styled.h1`
  font-family: 'Rokkitt';
  font-weight: bold;
  margin: 0;
  color: var(--yellow);
  font-size: 3rem;
`;
export const LogoSubTitle = styled.p`
  font-family: 'Kanit';
  margin: 0;
  font-size: 1.5rem;
`;

export const LeftElementsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CharIcon = styled(User)`
  color: ${(props) => (props.active ? 'var(--yellow)' : 'var(--light-purple)')};
  transition: all 0.2s ease;

  &:hover {
    color: var(--white);
  }
`;

export const GearIcon = styled(GearFill)`
  color: ${(props) => (props.active ? 'var(--yellow)' : 'var(--light-purple)')};
  transition: all 0.2s ease;
  margin-left: 1rem;

  &:hover {
    color: var(--white);
  }
`;

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
