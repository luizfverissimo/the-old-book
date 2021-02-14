import React from 'react';

import * as S from './styled';

function ModalSpellDetails({ spellDetails, closeModal }) {
  return (
    <S.ModalBackground>
      <S.SpellCardWrapper>
        <S.ModalCardCloseButton>
          <S.CloseIcon size={40} onClick={closeModal} />
        </S.ModalCardCloseButton>
        {Object.keys(spellDetails).length > 0 && (
          <>
            <S.SpellCardHeader>
              <S.SpellCardTitleWrapper>
                <S.SpellCardTitle>{spellDetails.name}</S.SpellCardTitle>
                <S.SpellCardInfo>
                  {spellDetails.level}-level {spellDetails.school.name}
                </S.SpellCardInfo>
              </S.SpellCardTitleWrapper>
            </S.SpellCardHeader>

            <S.SpellCardStatsWrapper>
              <p>
                <strong>Casting Time:</strong> {spellDetails.casting_time}
              </p>
              <p>
                <strong>Range:</strong> {spellDetails.range}
              </p>
              <p>
                <strong>Duration:</strong> {spellDetails.duration}
              </p>
              <p>
                <strong>Components:</strong>{' '}
                {!spellDetails.components ? (
                  <span>No components</span>
                ) : (
                  spellDetails.components.map((item, index) => (
                    <span key={index}>{item}, </span>
                  ))
                )}{' '}
                ({spellDetails.material})
              </p>
            </S.SpellCardStatsWrapper>
            <S.SpellCardDesc>
              <p>{spellDetails.desc[0]}</p>
              {spellDetails.higher_level && (
                <p>
                  <strong>At Higher Levels:</strong>{' '}
                  {spellDetails.higher_level[0]}
                </p>
              )}
            </S.SpellCardDesc>
          </>
        )}

        <S.SpellCardInteractionWrapper>
          <a>Add to SpellBook</a>
        </S.SpellCardInteractionWrapper>
      </S.SpellCardWrapper>
    </S.ModalBackground>
  );
}

export default ModalSpellDetails;
