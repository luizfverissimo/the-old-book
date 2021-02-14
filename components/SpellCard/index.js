import React, { useState } from 'react';

import * as S from './styled';

function SpellCard({
  index,
  name,
  desc,
  higherLevel,
  range,
  components,
  material,
  castingTime,
  concentration,
  attackType,
  ritual,
  duration,
  level,
  school,
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <S.SpellCardWrapper>
      {children}
      <S.SpellCardHeader>
        <S.SpellCardTitleWrapper expanded={isExpanded}>
          <S.SpellCardTitle>{name}</S.SpellCardTitle>
          <S.SpellCardInfo>
            {level}-level {school}
          </S.SpellCardInfo>
        </S.SpellCardTitleWrapper>

        <S.ArrowDownIcon
          size={20}
          expanded={isExpanded}
          onClick={() => setIsExpanded(!isExpanded)}
        />
      </S.SpellCardHeader>

      <S.SpellCardStatsWrapper expanded={isExpanded}>
        <p>
          <strong>Casting Time:</strong> {castingTime}
        </p>
        <p>
          <strong>Range:</strong> {range}
        </p>
        <p>
          <strong>Duration:</strong> {duration}
        </p>
        <p>
          <strong>Components:</strong>{' '}
          {!components ? (
            <span>No components</span>
          ) : (
            components.map((item, index) => <span key={index}>{item}, </span>)
          )}{' '}
          ({material})
        </p>
      </S.SpellCardStatsWrapper>
      <S.SpellCardDesc expanded={isExpanded}>
        <p>{desc}</p>
        <p>
          <strong>At Higher Levels:</strong> {higherLevel}
        </p>
      </S.SpellCardDesc>
      <S.SpellCardInteractionWrapper expanded={isExpanded}>
        <a>Roll</a>
        <a>Remove Spell</a>
      </S.SpellCardInteractionWrapper>
      <S.UpIconWrapper expanded={isExpanded}>
        <S.ArrowUpIcon size={20} onClick={() => setIsExpanded(!isExpanded)} />
      </S.UpIconWrapper>
    </S.SpellCardWrapper>
  );
}

export default SpellCard;
