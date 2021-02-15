import React, { useState, useContext } from 'react';
import useComponentVisible from '../../hooks/useComponentVisible';

import * as S from './styled';

import { CharContext } from '../../context/AppContext';
import SearchInput from '../SearchInput'

function Navbar({ openCharModal, openSpellDetails }) {

  const { chars, setActiveChar } = useContext(CharContext);

  const {
    ref,
    isComponentVisible,
    setIsComponentVisible
  } = useComponentVisible(false);

  return (
    <S.NavbarWrapper>
      <S.LogoWrapper>
        <S.LogoTitle>The Old Book</S.LogoTitle>
        <S.LogoSubTitle>SpellBook Manager</S.LogoSubTitle>
      </S.LogoWrapper>

      <S.LeftElementsWrapper>
        <SearchInput openSpellDetails={openSpellDetails}/>
        <S.IconsWrapper>
          <S.CharIcon
            active={isComponentVisible}
            size={28}
            onClick={() => setIsComponentVisible(!isComponentVisible)}
          />
          {isComponentVisible && (
            <S.CharWrapper ref={ref}>
              {Object.keys(chars).length === 0 ? (
                <S.CharItem>
                  <S.CharItemName onClick={openCharModal}>
                    No Characters found, create a new character.
                  </S.CharItemName>
                </S.CharItem>
              ) : (
                chars.map(({ charInfos, id }, index) => (
                  <S.CharItem key={index} onClick={() => setActiveChar(id)}>
                    <S.CharItemName>{charInfos.name}</S.CharItemName>
                    <S.CharItemClass>
                      {charInfos.race} {charInfos.charClass} - Level{' '}
                      {charInfos.level}
                    </S.CharItemClass>
                  </S.CharItem>
                ))
              )}

              <S.CharActionWrapper>
                <a onClick={openCharModal}>+ Add New Character</a>
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
