import React, { useState, useRef, useEffect } from 'react';
import useComponentVisible from '../../hooks/useComponentVisible';

import * as S from './styled';

function Filter() {
  const [filterSelected, setFilterSelected] = useState('All');
  const filters = [
    'All',
    'Cantrip',
    '1st-level',
    '2nd-level',
    '3rd-level',
    '4th-level',
    '5th-level',
    '6th-level',
    '7th-level',
    '8th-level',
    '9th-level'
  ];

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
