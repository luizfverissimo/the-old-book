import React, { useState, useContext } from 'react';
import useComponentVisible from '../../hooks/useComponentVisible';
import Lottie from 'react-lottie';
import * as S from './styled';

import { CharContext } from '../../context/AppContext';
import api from '../../utils/api';
import loadingAnimation from '../../public/lottie/loading.json';

function Navbar({ openCharModal }) {
  const [isOpenSearchResults, setIsOpenSearchResults] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [searchSpellsResults, setSearchSpellsResults] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [timer, setTimer] = useState(null);

  const loadingOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingAnimation
  };

  const { chars, setActiveChar } = useContext(CharContext);

  const {
    ref,
    isComponentVisible,
    setIsComponentVisible
  } = useComponentVisible(false);

  const fetchSearchSpells = async (query) => {
    setIsLoading(true);
    const res = await api.get(`/api/spells/?name=${query}`);
    const spellsResults = res.data.results;
    setSearchSpellsResults(spellsResults);
    setIsLoading(false);
  };

  const handleSpellSearch = (value) => {
    setSearchText(value);
    if (value.length >= 2) {
      const searchQuery = value.replace(/ /g, '+');
      clearTimeout(timer);
      const actualTimer = setTimeout(() => {
        fetchSearchSpells(searchQuery);
      }, 2000);

      setTimer(actualTimer);
    }
    return;
  };

  return (
    <S.NavbarWrapper>
      <S.LogoWrapper>
        <S.LogoTitle>The Old Book</S.LogoTitle>
        <S.LogoSubTitle>SpellBook Manager</S.LogoSubTitle>
      </S.LogoWrapper>

      <S.LeftElementsWrapper>
        <S.SearchInput
          placeholder='Search Spells'
          value={searchText}
          onChange={(e) => handleSpellSearch(e.target.value)}
          onFocus={() => {
            setIsOpenSearchResults(true);
            setIsComponentVisible(false);
          }}
          onBlur={() => setIsOpenSearchResults(false)}
        />
        {isOpenSearchResults && (
          <S.SearchResultWrapper>
            {isLoading && (
              <Lottie options={loadingOptions} width={60} height={60} />
            )}
            {searchSpellsResults.map((spell) => {
              return (
                <li key={spell.index}>
                  {spell.name}
                </li>
              );
            })}
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
