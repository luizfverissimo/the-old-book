import styled from 'styled-components';
import { User } from 'styled-icons/boxicons-solid';
import { GearFill } from 'styled-icons/bootstrap';

export const NavbarWrapper = styled.nav`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 0;
  position: relative;
`;

export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 2rem;
`;

export const ApiMessage = styled.p`
  color: var(--light-purple);
  font-family: 'Kanit', sans-serif;
  font-size: 1rem;

  a {
    text-decoration: underline;
  }
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
`;

export const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CharIcon = styled(User)`
  color: ${(props) => (props.active ? 'var(--yellow)' : 'var(--light-purple)')};
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    color: var(--white);
  }
`;

export const GearIcon = styled(GearFill)`
  color: ${(props) => (props.active ? 'var(--yellow)' : 'var(--light-purple)')};
  transition: all 0.2s ease;
  margin-left: 1rem;
  cursor: pointer;

  &:hover {
    color: var(--white);
  }
`;

export const CharWrapper = styled.ul`
  position: absolute;
  top: 6rem;
  right: 3rem;
  width: 20rem;
  height: auto;
  background-color: var(--black);
  padding: 1.5rem;
  border-radius: 1rem;
  font-family: 'Kanit', sans-serif;
  font-size: 1.3rem;
  color: var(--white);
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const CharItem = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0.5rem 0;
  cursor: pointer;

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;
export const CharItemName = styled.p`
  margin: 0;
  transition: all 0.2s ease;

  ${CharItem}:hover & {
    color: var(--yellow);
  }
`;
export const CharItemClass = styled.p`
  font-size: 1rem;
  margin: 0;
  transition: all 0.2s ease;

  ${CharItem}:hover & {
    color: var(--light-yellow);
  }
`;

export const CharActionWrapper = styled.li`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;

  a {
    color: var(--light-yellow);
    text-decoration: underline;
    cursor: pointer;

    &:hover {
      color: var(--yellow);
    }
  }
`;
