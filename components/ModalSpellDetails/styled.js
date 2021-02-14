import styled from 'styled-components'
import { Close } from 'styled-icons/evaicons-solid';

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

export const SpellCardWrapper = styled.div`
  width: 100%;
  max-width: 31rem;
  height: fit-content;
  padding: 3rem 1.5rem ;
  background-color: var(--purple);
  border-radius: 1.5rem;
  transition: all .2s ease;
  margin: 1rem 2rem 1rem 0;
  position: relative;
  filter: drop-shadow(0px 8px 4px rgba(0, 0, 0, 0.25));


  &:last-child {
    margin-right: 0;
  }
`

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

export const SpellCardHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const SpellCardTitleWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction:  row;
  justify-content: space-between;
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

export const SpellCardStatsWrapper = styled.div`
  width: 100%;
  color: var(--light-yellow);
  font-family: "Kanit", sans-serif;
  font-size: 1rem;
  display: flex;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 1rem;

  p{
    margin: 0;

    &:first-child {
      margin-bottom: 1rem;
    }

    strong {
      font-weight: 600;
    }
  }
`

export const SpellCardInteractionWrapper = styled.div`
  width: 100%;
  display: flex;
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