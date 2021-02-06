import React, { useState, useEffect } from 'react';

import * as S from './styled';

function ModalCreateChar({ closeModal, charInfos, isEditChar }) {
  const [name, setName] = useState('');
  const [race, setRace] = useState('');
  const [charClass, setCharClass] = useState('');
  const [level, setLevel] = useState('');

  useEffect(() => {
    if (isEditChar) {
      setName(charInfos.name);
      setRace(charInfos.race);
      setCharClass(charInfos.charClass);
      setLevel(charInfos.level);
    }
  }, []);

  return (
    <S.ModalBackground>
      <S.ModalCard>
        <S.ModalCardCloseButton>
          <S.CloseIcon size={40} onClick={closeModal} />
        </S.ModalCardCloseButton>

        <S.ModalCardTitle>New Character</S.ModalCardTitle>

        <S.ModalCardFormLabel>Name</S.ModalCardFormLabel>
        <S.ModalCardFormInput
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <S.ModalCardFormLabel>Race</S.ModalCardFormLabel>
        <S.ModalCardFormInput
          type='text'
          value={race}
          onChange={(e) => setRace(e.target.value)}
        />

        <S.ModalCardFormLabel>Class</S.ModalCardFormLabel>
        <S.ModalCardFormInput
          type='text'
          value={charClass}
          onChange={(e) => setCharClass(e.target.valeu)}
        />

        <S.ModalCardFormLabel>Level</S.ModalCardFormLabel>
        <S.ModalCardFormInput
          type='phone'
          maxLength={2}
          value={level}
          onChange={(e) => setLevel(e.target.value)}
        />

        <S.ModalCardInteractionWrapper>
          {isEditChar && <a>Delete</a>}
          <a>Create</a>
        </S.ModalCardInteractionWrapper>
      </S.ModalCard>
    </S.ModalBackground>
  );
}

export default ModalCreateChar;
