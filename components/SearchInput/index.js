import React, { useState, useContext } from 'react';
import Lottie from 'react-lottie';

import loadingAnimation from '../../public/lottie/loading.json';
import useComponentVisible from '../../hooks/useComponentVisible';
import { CharContext } from '../../context/AppContext';
import api from '../../utils/api';
import * as S from './styled';

function SearchInput({openSpellDetails}) {
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

  const { fetchSpellDetails } = useContext(CharContext);

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
      }, 1000);

      setTimer(actualTimer);
    }
    return;
  };

  const handleSpellDetails = async (query) => {
    await fetchSpellDetails(query)
    openSpellDetails();
  };

  return (
    <>
      <S.SearchInput
        placeholder='Search Spells'
        value={searchText}
        onChange={(e) => handleSpellSearch(e.target.value)}
        onClick={() => {
          setIsComponentVisible(true);
        }}
      />
      {isComponentVisible && (
        <S.SearchResultWrapper ref={ref}>
          {isLoading && (
            <Lottie options={loadingOptions} width={60} height={60} />
          )}
          {searchSpellsResults.map((spell) => {
            return (
              <li
                key={spell.index}
                onClick={() => handleSpellDetails(spell.url)}
              >
                {spell.name}
              </li>
            );
          })}
        </S.SearchResultWrapper>
      )}
    </>
  );
}

export default SearchInput;
