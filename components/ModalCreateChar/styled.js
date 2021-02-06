import styled from 'styled-components';
import { Close } from 'styled-icons/evaicons-solid';
import { Construction } from 'styled-icons/material-twotone';

export const ModalBackground = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(69, 59, 72, 0.9);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  padding: 5rem;
`;

export const ModalCard = styled.div`
  width: 100%;
  max-width: 40rem;
  height: fit-content;
  padding: 2rem;
  background-color: var(--purple);
  border-radius: 1.5rem;
  transition: all 0.2s ease;
  margin: 1rem 2rem 1rem 0;
  filter: drop-shadow(0px 8px 4px rgba(0, 0, 0, 0.25));
  font-family: 'Kanit', sans-serif;
  font-size: 1.5rem;
  position: relative;
`;

export const ModalCardTitle = styled.h2`
  font-family: 'Rokkitt';
  font-weight: bold;
  margin: 0;
  margin-bottom: 2rem;
  color: var(--yellow);
  font-size: 2rem;
`;

export const ModalCardFormLabel = styled.label`
  &:focus {
    color: var(--yellow);
  }
`;

export const ModalCardFormInput = styled.input`
  width: 100%;
  background-color: transparent;
  outline: 0;
  border: 0;
  border-bottom: 2px solid var(--light-purple);
  color: var(--light-yellow);
  padding: 1rem 0 0.3rem 0;
  font-family: 'Kanit', sans-serif;
  font-size: 1.5rem;
  margin-bottom: 1rem;

  &:focus {
    border-bottom: 2px solid var(--yellow);
  }
`;

export const ModalCardInteractionWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: var(--light-yellow);
  font-family: 'Kanit', sans-serif;
  font-size: 1.5rem;
  margin-top: 2rem;
  text-decoration: underline;

  a {
    cursor: pointer;
    transition: all 0.2s ease;
    padding-left: 1rem;

    &:hover {
      color: var(--yellow);
    }
  }
`;

export const ModalCardCloseButton = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: var(--yellow);
  position: absolute;
  top: -15px;
  right: -15px;
  transition: all 0.2s ease;
  filter: drop-shadow(0px 8px 4px rgba(0, 0, 0, 0.25));
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
  }
`;

export const CloseIcon = styled(Close)`
  color: var(--purple);
`
