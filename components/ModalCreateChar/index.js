import React, { useState, useEffect, useContext } from 'react';
import uniqid from 'uniqid';

import * as S from './styled';

import { CharContext } from '../../context/AppContext';
import { FormatColorReset } from 'styled-icons/material-rounded';

function ModalCreateChar({ closeModal, charInfos, charId, isEditChar }) {
  const [name, setName] = useState('');
  const [race, setRace] = useState('');
  const [charClass, setCharClass] = useState('');
  const [level, setLevel] = useState('');
  const [id, setId] = useState('');

  const { chars, createNewChar, editChar, deleteChar } = useContext(
    CharContext
  );

  useEffect(() => {
    if (isEditChar) {
      setName(charInfos.name);
      setRace(charInfos.race);
      setCharClass(charInfos.charClass);
      setLevel(charInfos.level);
      setId(charId);
    }
  }, []);

  const handleCharCreation = () => {
    if (
      name.length === 0 ||
      race.length === 0 ||
      charClass.length === 0 ||
      level.length === 0
    ) {
      alert('All fields is required.');
      return;
    }

    const charObj = {
      id: isEditChar ? id : uniqid(),
      isActive: false,
      charInfos: {
        name,
        race,
        charClass,
        level
      },
      spells: []
    };

    if (!isEditChar) {
      createNewChar(charObj);
    }

    if (isEditChar) {
      editChar(charObj, id);
    }
    closeModal();
  };

  const handleDeleteChar = () => {
    const res = deleteChar(id);
    if (res) closeModal();
  };

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
          onChange={(e) => setCharClass(e.target.value)}
        />

        <S.ModalCardFormLabel>Level</S.ModalCardFormLabel>
        <S.ModalCardFormInput
          type='phone'
          maxLength={2}
          value={level}
          onChange={(e) => setLevel(e.target.value)}
        />
        <S.ModalCardInteractionWrapper>
          {isEditChar && <a onClick={() => handleDeleteChar()}>Delete</a>}
          <a onClick={handleCharCreation}>{isEditChar ? 'Save' : 'Create'}</a>
        </S.ModalCardInteractionWrapper>
      </S.ModalCard>
    </S.ModalBackground>
  );
}

export default ModalCreateChar;
