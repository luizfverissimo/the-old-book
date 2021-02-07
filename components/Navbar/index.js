import React, { useState, useContext } from 'react';
import useComponentVisible from '../../hooks/useComponentVisible';
import * as S from './styled';

import { CharContext } from '../../context/AppContext';

function Navbar({ openCharModal }) {
  const [isOpenChar, setIsOpenChar] = useState(false);
  const [isOpenSearchResults, setIsOpenSearchResults] = useState(false);

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
        <S.SearchInput
          placeholder='Search Spells'
          onFocus={() => {
            setIsOpenSearchResults(true);
            setIsComponentVisible(false);
          }}
          onBlur={() => setIsOpenSearchResults(false)}
        />
        {isOpenSearchResults && (
          <S.SearchResultWrapper>
            <li>Fire Bolt</li>
            <li>Fire Ball</li>
          </S.SearchResultWrapper>
        )}

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
