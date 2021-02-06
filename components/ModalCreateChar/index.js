import React, { useState, useEffect } from 'react';
import uniqid from 'uniqid'

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

  const handleCharCreation = () => {
    if (
      name.length === 0 ||
      race.length === 0 ||
      charClass.length === 0 ||
      level.length === 0
    ) {
      alert('All fields is required.')
      return
    }

    const charObj = {
      id: uniqid(),
      isActive: false,
      charInfos: {
        name,
        race,
        charClass,
        level
      },
      spells: []
    }

    const charsFromLocalStorage = localStorage.getItem('chars')
    if (!charsFromLocalStorage) {
      const charsToLocalStorage = {
        chars: [
          charObj
        ]
      }
      localStorage.setItem('chars', JSON.stringify(charsToLocalStorage))
      alert('Character successfully created.')
      return
    }

    const charsParsed = JSON.parse(charsFromLocalStorage)

    if(!isEditChar) {
      console.log(charsParsed)
      charsParsed.chars.push(charObj)
      localStorage.setItem('chars', JSON.stringify(charsParsed))
      alert('Character successfully created.')
      return
    }

    if(isEditChar) {
      const charsFiltered = charsParsed.chars.filter(char => char.id !== charInfos.id )
      charsFiltered.chars.push(charObj)
      localStorage.setItem('chars', JSON.stringify(charsFiltered))
      alert('Character successfully created.')
      return
    }
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
          {isEditChar && <a>Delete</a>}
          <a onClick={handleCharCreation}>Create</a>
        </S.ModalCardInteractionWrapper>
      </S.ModalCard>
    </S.ModalBackground>
  );
}

export default ModalCreateChar;
