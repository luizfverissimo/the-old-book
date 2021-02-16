import React, { useContext } from 'react';
import useComponentVisible from '../../hooks/useComponentVisible';
import filtersJSONData from '../../data/filters.json';

import * as S from './styled';
import { CharContext } from '../../context/AppContext';

function Filter() {
  const { filters } = filtersJSONData;

  const { filterSelected, setFilterSelected } = useContext(CharContext);

  const {
    ref,
    isComponentVisible,
    setIsComponentVisible
  } = useComponentVisible(false);

  return (
    <S.FilterWrapper>
      <p>{filterSelected.name}</p>
      <S.FilterIconWrapper
        active={isComponentVisible}
        onClick={() => setIsComponentVisible(!isComponentVisible)}
      >
        <S.FilterIcon size={32} active={isComponentVisible} />
      </S.FilterIconWrapper>

      {isComponentVisible && (
        <S.FilterItemsWrapper ref={ref}>
          {filters.map((filter, index) => (
            <li
              key={index}
              onClick={() => {
                setFilterSelected(filter);
              }}
            >
              {filter.name}
            </li>
          ))}
        </S.FilterItemsWrapper>
      )}
    </S.FilterWrapper>
  );
}

export default Filter;
