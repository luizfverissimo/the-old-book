import React, { useState } from 'react';
import useComponentVisible from '../../hooks/useComponentVisible';
import filtersJSONData from '../../data/filters.json';

import * as S from './styled';

function Filter() {
  const [filterSelected, setFilterSelected] = useState('All');

  const { filters } = filtersJSONData;

  const {
    ref,
    isComponentVisible,
    setIsComponentVisible
  } = useComponentVisible(false);

  return (
    <S.FilterWrapper>
      <p>{filterSelected}</p>
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
              {filter}
            </li>
          ))}
        </S.FilterItemsWrapper>
      )}
    </S.FilterWrapper>
  );
}

export default Filter;
