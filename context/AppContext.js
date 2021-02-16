import React, { createContext, useState, useEffect } from 'react';
import api from '../utils/api';

const CharContext = createContext();

const AppContext = ({ children }) => {
  const [chars, setChars] = useState({});
  const [charActive, setCharActive] = useState({});
  const [spellDetails, setSpellDetails] = useState({});
  const [noCharsFound, setNoCharsFound] = useState(true);
  const [filterSelected, setFilterSelected] = useState({
    name: 'All',
    value: null
  });

  useEffect(() => {
    const charsFromLocalStorage = localStorage.getItem('chars');
    if (!charsFromLocalStorage) {
      setNoCharsFound(true);
      return;
    }
    const charsParsed = JSON.parse(charsFromLocalStorage);
    const charActiveFiltered = charsParsed.chars.filter(
      (char) => char.isActive
    );

    console.log('Chars:', charsParsed.chars);
    console.log('Char Active:', charActiveFiltered[0]);

    setChars(charsParsed.chars);
    setCharActive(charActiveFiltered[0]);
    setNoCharsFound(false);
  }, []);

  const createNewChar = (charObj) => {
    const charsFromLocalStorage = localStorage.getItem('chars');
    if (!charsFromLocalStorage) {
      const charsToLocalStorage = {
        chars: [charObj]
      };
      localStorage.setItem('chars', JSON.stringify(charsToLocalStorage));
      setChars(charsToLocalStorage.chars);
      alert('Character successfully created.');
      return;
    }
    const charsParsed = JSON.parse(charsFromLocalStorage);

    charsParsed.chars.push(charObj);
    localStorage.setItem('chars', JSON.stringify(charsParsed));
    setChars(charsParsed.chars);
    alert('Character successfully created.');
    return;
  };

  //testar***

  const editChar = (charObj, charId) => {
    const charsFromLocalStorage = localStorage.getItem('chars');
    const charsParsed = JSON.parse(charsFromLocalStorage);

    let charsFiltered = charsParsed.chars.filter((char) => char.id !== charId);

    charsFiltered.push(charObj);
    const charsToLocalStorage = {
      chars: charsFiltered
    };
    localStorage.setItem('chars', JSON.stringify(charsToLocalStorage));
    setChars(charsToLocalStorage.chars);
    setCharActive(charObj);
    alert('Character successfully edited.');
    return;
  };

  const deleteChar = (charId) => {
    if (confirm('Do you really want to delete this character?')) {
      const charsFromLocalStorage = localStorage.getItem('chars');
      const charsParsed = JSON.parse(charsFromLocalStorage);
      const charsFiltered = charsParsed.chars.filter(
        (char) => char.id !== charId
      );
      if (charsFiltered.length === 0) {
        setNoCharsFound(true);
        localStorage.removeItem('chars');
        setChars({});
        setCharActive({});
        alert('Character deleted!');
        return Trash2Outline;
      }

      const charsToLocalStorage = {
        chars: charsFiltered
      };

      localStorage.setItem('chars', JSON.stringify(charsToLocalStorage));
      setChars(charsToLocalStorage.chars);
      setCharActive(charsToLocalStorage.chars[0]);
      alert('Character deleted!');
      return true;
    }
    return false;
  };

  const setActiveChar = (id) => {
    const charsFromLocalStorage = localStorage.getItem('chars');
    let charsParsed = JSON.parse(charsFromLocalStorage);

    charsParsed.chars.forEach((char) => {
      if (char.id === id) {
        char.isActive = true;
        return;
      }
      char.isActive = false;
      return;
    });

    localStorage.setItem('chars', JSON.stringify(charsParsed));
    setChars(charsParsed.chars);

    let charActive = chars.filter((char) => char.id === id);
    charActive[0].isActive = true;
    console.log(charActive[0]);
    setCharActive(charActive[0]);
    setNoCharsFound(false);
    return;
  };

  const fetchSpellDetails = async (query) => {
    const res = await api.get(query);
    const spellDetailsRes = res.data;
    console.log(spellDetailsRes);
    setSpellDetails(spellDetailsRes);
    return;
  };

  const addSpell = (spell, charId) => {
    if (Object.keys(charActive).length === 0) {
      alert('Create a char to start add spells.');
      return;
    }

    const charsFromLocalStorage = localStorage.getItem('chars');
    const charsParsed = JSON.parse(charsFromLocalStorage);

    let charEdited = charsParsed.chars.filter((char) => char.id === charId);

    charEdited[0].spells.push(spell);

    let charsFiltered = charsParsed.chars.filter((char) => char.id !== charId);

    charsFiltered.push(charEdited[0]);
    const charsToLocalStorage = {
      chars: charsFiltered
    };
    localStorage.setItem('chars', JSON.stringify(charsToLocalStorage));
    setChars(charsToLocalStorage.chars);
    setCharActive(charEdited[0]);
    alert('Spells added to your SpellBook.');
    return;
  };

  const removeSpell = (spellIndex, charId) => {
    if (confirm('Do you really want to remove this spell?')) {
      const charsFromLocalStorage = localStorage.getItem('chars');
      const charsParsed = JSON.parse(charsFromLocalStorage);

      let charEdited = charsParsed.chars.filter((char) => char.id === charId);

      const spellFiltered = charEdited[0].spells.filter(
        (spell) => spell.index !== spellIndex
      );
      charEdited[0].spells = spellFiltered;

      let charsFiltered = charsParsed.chars.filter(
        (char) => char.id !== charId
      );

      charsFiltered.push(charEdited[0]);
      const charsToLocalStorage = {
        chars: charsFiltered
      };
      localStorage.setItem('chars', JSON.stringify(charsToLocalStorage));
      setChars(charsToLocalStorage.chars);
      setCharActive(charEdited[0]);
      alert('The Spell was removed from your SpellBook.');
      return;
    }
    return;
  };

  return (
    <CharContext.Provider
      value={{
        chars,
        charActive,
        noCharsFound,
        spellDetails,
        filterSelected,
        setFilterSelected,
        createNewChar,
        editChar,
        setActiveChar,
        deleteChar,
        fetchSpellDetails,
        addSpell,
        removeSpell
      }}
    >
      {children}
    </CharContext.Provider>
  );
};

export { AppContext, CharContext };
