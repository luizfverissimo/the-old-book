import React from 'react';
import * as S from './styled';

function CharTitle({ name, charClass, race, level }) {
  return (
    <S.CharTitleWrapper>
      <S.CharName>{name}</S.CharName>
      <S.CharInfo>
        {race} {charClass} - Level {level}
      </S.CharInfo>
    </S.CharTitleWrapper>
  );
}

export default CharTitle;
