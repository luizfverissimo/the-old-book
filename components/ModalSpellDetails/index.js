import React, { useContext } from 'react';

import { CharContext } from '../../context/AppContext';

import * as S from './styled';

function ModalSpellDetails({ spellDetails, closeModal }) {
  const { addSpell, charActive } = useContext(CharContext);

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
                  {spellDetails.level === 0
                    ? 'Cantrip'
                    : `${spellDetails.level}-level`}{' '}
                  {spellDetails.school.name}
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
              {spellDetails.concentration && (
                <p>
                  <strong>Concentration.</strong>
                </p>
              )}
              {spellDetails.ritual && (
                <p>
                  <strong>Ritual.</strong>
                </p>
              )}
              {spellDetails.area_of_effect && (
                <p>
                  <strong>Area of effect:</strong>{' '}
                  {spellDetails.area_of_effect.type} -{' '}
                  {spellDetails.area_of_effect.size}
                </p>
              )}
              <p>
                <strong>Components:</strong>{' '}
                {!spellDetails.components ? (
                  <span>No components</span>
                ) : (
                  spellDetails.components.map((item, index) => (
                    <span key={index}>{item}, </span>
                  ))
                )}{' '}
                {spellDetails.material ? `(${spellDetails.material})` : null}
              </p>
            </S.SpellCardStatsWrapper>
            <S.SpellCardDesc>
              {spellDetails.desc.map((spell, index) => (
                <p key={index}>{spell}</p>
              ))}
              {spellDetails.higher_level && (
                <>
                  <p>
                    <strong>At Higher Levels:</strong>
                  </p>
                  {spellDetails.higher_level.map((spell, index) => (
                    <p key={index}>{spell}</p>
                  ))}
                </>
              )}
            </S.SpellCardDesc>
          </>
        )}

        <S.SpellCardInteractionWrapper>
          <a onClick={() => addSpell(spellDetails, charActive.id)}>
            Add to SpellBook
          </a>
        </S.SpellCardInteractionWrapper>
      </S.SpellCardWrapper>
    </S.ModalBackground>
  );
}

export default ModalSpellDetails;
