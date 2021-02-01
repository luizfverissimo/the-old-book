import React from 'react';
import * as S from './styled';

function CharTitle({ name, charClass, race, level }) {
  return (
    <S.CharTitleWrapper>
      <S.CharNameWrapper>
        <S.CharName>{name}</S.CharName>
        <S.EditIcon size={26} />
      </S.CharNameWrapper>
      <S.CharInfo>
        {race} {charClass} - Level {level}
      </S.CharInfo>
    </S.CharTitleWrapper>
  );
}

export default CharTitle;
