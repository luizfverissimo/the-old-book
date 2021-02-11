import React, { useState, useContext } from 'react';
import Head from 'next/head';
import CharTitle from '../components/CharTitle';
import Filter from '../components/Filter';
import ModalCreateChar from '../components/ModalCreateChar';
import Navbar from '../components/Navbar';
import SpellCard from '../components/SpellCard';

import * as S from '../styles/Home';
import { CharContext } from '../context/AppContext';

export default function Home() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isEditChar, setIsEditChar] = useState(false);

  const { chars, charActive, noCharsFound } = useContext(CharContext);

  const charInfos = {
    name: 'Rydel Theharcie',
    charClass: 'Sorcerer',
    race: 'Elf',
    level: '02'
  };

  return (
    <>
      <Head>
        <title>The Old Book | SpellBook Manager</title>
      </Head>
      {isOpenModal && (
        <ModalCreateChar
          charInfos={charActive.charInfos}
          charId={charActive.id}
          isEditChar={isEditChar}
          closeModal={() => setIsOpenModal(false)}
        />
      )}

      <S.Content>
        <Navbar
          openCharModal={() => {
            setIsOpenModal(true);
            setIsEditChar(false);
          }}
        />
        {noCharsFound ? (
          <S.NoCharMessage>No Characters found, create a new Character.</S.NoCharMessage>
        ) : (
          <CharTitle
            name={charActive.charInfos.name}
            charClass={charActive.charInfos.charClass}
            race={charActive.charInfos.race}
            level={charActive.charInfos.level}
            openCharModal={() => {
              setIsOpenModal(true);
              setIsEditChar(true);
            }}
          />
        )}

        <Filter />

        {!noCharsFound && (
          <S.SpellCardGridWrapper>
            <SpellCard
              name='Acid Arrow'
              level='2'
              school='Evocation'
              castingTime='1 action'
              range='90 feet'
              duration='Instantaneous'
              components={['V', 'S', 'M']}
              material="Powdered rhubarb leaf and an adder's stomach."
              desc='A shimmering green arrow streaks toward a target within range and bursts in a spray of acid. Make a ranged spell attack against the target. On a hit, the target takes 4d4 acid damage immediately and 2d4 acid damage at the end of its next turn. On a miss, the arrow splashes the target with acid for half as much of the initial damage and no damage at the end of its next turn.'
              higherLevel='When you cast this spell using a spell slot of 3rd level or higher, the damage (both initial and later) increases by 1d4 for each slot level above 2nd.'
            />
            <SpellCard
              name='Acid Arrow'
              level='2'
              school='Evocation'
              castingTime='1 action'
              range='90 feet'
              duration='Instantaneous'
              components={['V', 'S', 'M']}
              material="Powdered rhubarb leaf and an adder's stomach."
            />
            <SpellCard
              name='Acid Arrow'
              level='2'
              school='Evocation'
              castingTime='1 action'
              range='90 feet'
              duration='Instantaneous'
              components={['V', 'S', 'M']}
              material="Powdered rhubarb leaf and an adder's stomach."
            />
            <SpellCard
              name='Acid Arrow'
              level='2'
              school='Evocation'
              castingTime='1 action'
              range='90 feet'
              duration='Instantaneous'
              components={['V', 'S', 'M']}
              material="Powdered rhubarb leaf and an adder's stomach."
            />
            <SpellCard
              name='Acid Arrow'
              level='2'
              school='Evocation'
              castingTime='1 action'
              range='90 feet'
              duration='Instantaneous'
              components={['V', 'S', 'M']}
              material="Powdered rhubarb leaf and an adder's stomach."
            />
            <SpellCard
              name='Acid Arrow'
              level='2'
              school='Evocation'
              castingTime='1 action'
              range='90 feet'
              duration='Instantaneous'
              components={['V', 'S', 'M']}
              material="Powdered rhubarb leaf and an adder's stomach."
            />
          </S.SpellCardGridWrapper>
        )}
      </S.Content>
    </>
  );
}
