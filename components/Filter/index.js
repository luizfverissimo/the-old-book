import React, { useState } from 'react';

import * as S from './styled';

function Filter() {
  const [isActive, setIsActive] = useState(false);
  const filters = [
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

  return (
    <S.FilterWrapper>
      <p>All</p>
      <S.FilterIconWrapper
        active={isActive}
        onClick={() => setIsActive(!isActive)}
      >
        <S.FilterIcon size={32} active={isActive} />
      </S.FilterIconWrapper>

      {isActive && (
        <S.FilterItemsWrapper>
          {filters.map((filter) => (
            <li>{filter}</li>
          ))}
        </S.FilterItemsWrapper>
      )}
    </S.FilterWrapper>
  );
}

export default Filter;
