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

  const {
    chars,
    charActive,
    filterSelected,
    noCharsFound,
    spellDetails
  } = useContext(CharContext);

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
            {charActive.spells.length === 0 ? (
              <S.NoSpellsMessage>
                No Spells, search and add to your SpellBook.
              </S.NoSpellsMessage>
            ) : (
              charActive.spells.map((spell, index) => {
                if (filterSelected.value === null) {
                  console.log(spell.level);
                  return (
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
                  );
                }
                if (spell.level === filterSelected.value) {
                  console.log(spell.level);
                  return (
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
                  );
                }
              })
            )}
          </S.SpellCardGridWrapper>
        )}
        <S.FooterWrapper>
          <p>
            Data provided by{' '}
            <a href='http://www.dnd5eapi.co' rel='noreferrer' target='_blank'>
              D&D 5e API
            </a>
            .
          </p>
        </S.FooterWrapper>
      </S.Content>
    </>
  );
}
