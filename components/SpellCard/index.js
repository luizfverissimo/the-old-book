import React, { useState, useContext } from 'react';

import * as S from './styled';
import { CharContext } from '../../context/AppContext';

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
  ritual,
  duration,
  level,
  school,
  aoe
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { charActive, removeSpell } = useContext(CharContext);

  return (
    <S.SpellCardWrapper>
      <S.SpellCardHeader>
        <S.SpellCardTitleWrapper expanded={isExpanded}>
          <S.SpellCardTitle>{name}</S.SpellCardTitle>
          <S.SpellCardInfo>
            {level}-level {school.name}
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
        {concentration && (
          <p>
            <strong>Concentration.</strong>
          </p>
        )}
        {ritual && (
          <p>
            <strong>Ritual.</strong>
          </p>
        )}
        {aoe && (
          <p>
            <strong>Area of effect:</strong> {aoe.type} - {aoe.size}
          </p>
        )}
        <p>
          <strong>Components:</strong>{' '}
          {!components ? (
            <span>No components</span>
          ) : (
            components.map((item, index) => <span key={index}>{item}, </span>)
          )}{' '}
          {material ? `(${material})` : null}
        </p>
      </S.SpellCardStatsWrapper>
      <S.SpellCardDesc expanded={isExpanded}>
        {desc.map((spell, index) => (
          <p key={index}>{spell}</p>
        ))}
        {higherLevel && (
          <>
            <p>
              <strong>At Higher Levels:</strong>
            </p>
            {higherLevel.map((spell, index) => (
              <p key={index}>{spell}</p>
            ))}
          </>
        )}
      </S.SpellCardDesc>
      <S.SpellCardInteractionWrapper expanded={isExpanded}>
        <a>Roll</a>
        <a onClick={() => removeSpell(index, charActive.id)}>Remove Spell</a>
      </S.SpellCardInteractionWrapper>
      <S.UpIconWrapper expanded={isExpanded}>
        <S.ArrowUpIcon size={20} onClick={() => setIsExpanded(!isExpanded)} />
      </S.UpIconWrapper>
    </S.SpellCardWrapper>

    // <S.SpellCardWrapper>
    //   <S.SpellCardHeader>
    //     <S.SpellCardTitleWrapper expanded={isExpanded}>
    //       <S.SpellCardTitle>{name}</S.SpellCardTitle>
    //       <S.SpellCardInfo>
    //         {level}-level {school}
    //       </S.SpellCardInfo>
    //     </S.SpellCardTitleWrapper>

    //     <S.ArrowDownIcon
    //       size={20}
    //       expanded={isExpanded}
    //       onClick={() => setIsExpanded(!isExpanded)}
    //     />
    //   </S.SpellCardHeader>

    //   <S.SpellCardStatsWrapper expanded={isExpanded}>
    //     <p>
    //       <strong>Casting Time:</strong> {castingTime}
    //     </p>
    //     <p>
    //       <strong>Range:</strong> {range}
    //     </p>
    //     <p>
    //       <strong>Duration:</strong> {duration}
    //     </p>
    //     <p>
    //       <strong>Components:</strong>{' '}
    //       {!components ? (
    //         <span>No components</span>
    //       ) : (
    //         components.map((item, index) => <span key={index}>{item}, </span>)
    //       )}{' '}
    //       ({material})
    //     </p>
    //   </S.SpellCardStatsWrapper>
    //   <S.SpellCardDesc expanded={isExpanded}>
    //     <p>{desc}</p>
    //     <p>
    //       <strong>At Higher Levels:</strong> {higherLevel}
    //     </p>
    //   </S.SpellCardDesc>
    //   <S.SpellCardInteractionWrapper expanded={isExpanded}>
    //     <a>Roll</a>
    //     <a>Remove Spell</a>
    //   </S.SpellCardInteractionWrapper>
    //   <S.UpIconWrapper expanded={isExpanded}>
    //     <S.ArrowUpIcon size={20} onClick={() => setIsExpanded(!isExpanded)} />
    //   </S.UpIconWrapper>
    // </S.SpellCardWrapper>
  );
}

export default SpellCard;
