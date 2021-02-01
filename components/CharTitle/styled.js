import styled from 'styled-components';

import { EditAlt } from 'styled-icons/boxicons-solid/';

export const CharTitleWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 3.5rem;
  margin: 6rem 0;
`;

export const CharNameWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`

export const CharName = styled.h2`
  color: var(--white);
  font-family: 'Kanit', sans-serif;
  font-size: 4rem;
  font-weight: bold;
  margin: 0;
`;

export const EditIcon = styled(EditAlt)`
  color: var(--light-purple);
  transition: all 0.2s ease;
  margin-left: 2rem;
  cursor: pointer;

  &:hover {
    color: var(--white);
  }
`

export const CharInfo = styled.p`
  font-family: 'Rokkitt', serif;
  color: var(--light-purple);
  font-size: 2rem;
  margin: 0;
`;

