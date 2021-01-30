import React from 'react';
import * as S from './styled';

function Navbar() {
  return (
    <S.NavbarWrapper>
      <S.LogoWrapper>
        <S.LogoTitle>The Old Book</S.LogoTitle>
        <S.LogoSubTitle>SpellBook Manager</S.LogoSubTitle>
      </S.LogoWrapper>

      <S.LeftElementsWrapper>
        <S.SearchInput placeholder="Search Spells"/>
        <S.IconsWrapper>
          <S.CharIcon size={24} />
          <S.GearIcon size={24} />
        </S.IconsWrapper>
      </S.LeftElementsWrapper>
    </S.NavbarWrapper>
  );
}

export default Navbar;
