import React, { useState, useContext } from 'react';
import Head from 'next/head';

import CharTitle from '../components/CharTitle';
import Filter from '../components/Filter';
import ModalCreateChar from '../components/ModalCreateChar';
import Navbar from '../components/Navbar';
import SpellCard from '../components/SpellCard';
import ModalSpellDetails from '../components/ModalSpellDetails';

import * as S from '../styles/Home';
import { CharContext } from '../context/AppContext';

export default function Home() {
  const [isOpenModalCreateChar, setIsOpenModalCreateChar] = useState(false);
  const [isOpenModalSpellDetails, setIsOpenModalSpellDetails] = useState(false);
  const [isEditChar, setIsEditChar] = useState(false);

  const { chars, charActive, noCharsFound, spellDetails } = useContext(
    CharContext
  );

  return (
    <>
      <Head>
        <title>The Old Book | SpellBook Manager</title>
      </Head>
      {isOpenModalCreateChar && (
        <ModalCreateChar
          charInfos={charActive.charInfos}
          charId={charActive.id}
          isEditChar={isEditChar}
          closeModal={() => setIsOpenModalCreateChar(false)}
        />
      )}

      {isOpenModalSpellDetails && (
        <ModalSpellDetails
          spellDetails={spellDetails}
          closeModal={() => setIsOpenModalSpellDetails(false)}
        />
      )}

      <S.Content>
        <Navbar
          openCharModal={() => {
            setIsOpenModalCreateChar(true);
            setIsEditChar(false);
          }}
          openSpellDetails={() => setIsOpenModalSpellDetails(true)}
        />
        {noCharsFound ? (
          <S.NoCharMessage>
            No Characters found, create a new Character.
          </S.NoCharMessage>
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
            {/* <SpellCard
              name='Acid Arrow'
              level='2'
              school='Evocation'
              castingTime='1 action'
              range='90 feet'
              duration='Instantaneous'
              components={['V', 'S', 'M']}
              material="Powdered rhubarb leaf and an adder's stomach."
              desc={['A shimmering green arrow streaks toward a target within range and bursts in a spray of acid. Make a ranged spell attack against the target. On a hit, the target takes 4d4 acid damage immediately and 2d4 acid damage at the end of its next turn. On a miss, the arrow splashes the target with acid for half as much of the initial damage and no damage at the end of its next turn.']}
              higherLevel={['When you cast this spell using a spell slot of 3rd level or higher, the damage (both initial and later) increases by 1d4 for each slot level above 2nd.']}
            /> */}
            {charActive.spells.length === 0 ? (
              <S.NoSpellsMessage>
                No Spells, search and add to your SpellBook.
              </S.NoSpellsMessage>
            ) : (
              charActive.spells.map((spell, index) => (
                <SpellCard
                  key={index}
                  index={spell.index}
                  name={spell.name}
                  desc={spell.desc}
                  higherLevel={spell.higher_level}
                  range={spell.range}
                  components={spell.components}
                  material={spell.material}
                  castingTime={spell.casting_time}
                  concentration={spell.concentration}
                  ritual={spell.ritual}
                  duration={spell.duration}
                  level={spell.level}
                  school={spell.school}
                  aoe={spell.area_of_effect}
                />
              ))
            )}
          </S.SpellCardGridWrapper>
        )}
      </S.Content>
    </>
  );
}
