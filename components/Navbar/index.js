import React, { useState } from 'react';
import * as S from './styled';

function Navbar({ chars }) {
  const [isOpenChar, setIsOpenChar] = useState(true);

  return (
    <S.NavbarWrapper>
      <S.LogoWrapper>
        <S.LogoTitle>The Old Book</S.LogoTitle>
        <S.LogoSubTitle>SpellBook Manager</S.LogoSubTitle>
      </S.LogoWrapper>

      <S.LeftElementsWrapper>
        <S.SearchInput placeholder='Search Spells' />
        <S.IconsWrapper>
          <S.CharIcon
            active={isOpenChar}
            size={28}
            onClick={() => setIsOpenChar(!isOpenChar)}
          />
          {isOpenChar && (
            <S.CharWrapper>
              {chars.map((char) => (
                <S.CharItem>
                  <S.CharItemName>{char.name}</S.CharItemName>
                  <S.CharItemClass>
                    {char.race} {char.charClass} - Level {char.level}
                  </S.CharItemClass>
                </S.CharItem>
              ))}
              <S.CharActionWrapper>
                <a>+ Add New Character</a>
              </S.CharActionWrapper>
            </S.CharWrapper>
          )}
          <S.GearIcon size={28} />
        </S.IconsWrapper>
      </S.LeftElementsWrapper>
    </S.NavbarWrapper>
  );
}

export default Navbar;
