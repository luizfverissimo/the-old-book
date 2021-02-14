import React from 'react';

import * as S from './styled';
import SpellCard from '../SpellCard';

function ModalSpellDetails({
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
  closeModal
}) {
  return (
    <S.ModalBackground>
      <S.SpellCardWrapper>
        <S.ModalCardCloseButton>
          <S.CloseIcon size={40} onClick={closeModal} />
        </S.ModalCardCloseButton>
        <S.SpellCardHeader>
          <S.SpellCardTitleWrapper>
            <S.SpellCardTitle>{name}</S.SpellCardTitle>
            <S.SpellCardInfo>
              {level}-level {school}
            </S.SpellCardInfo>
          </S.SpellCardTitleWrapper>
        </S.SpellCardHeader>

        <S.SpellCardStatsWrapper>
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
        <S.SpellCardDesc>
          <p>{desc}</p>
          <p>
            <strong>At Higher Levels:</strong> {higherLevel}
          </p>
        </S.SpellCardDesc>
        <S.SpellCardInteractionWrapper>
          <a>Add to SpellBook</a>
        </S.SpellCardInteractionWrapper>
      </S.SpellCardWrapper>
    </S.ModalBackground>
  );
}

export default ModalSpellDetails;
