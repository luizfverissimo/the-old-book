import React, { createContext, useState, useEffect } from 'react';
import { Trash2Outline } from 'styled-icons/evaicons-outline';
import { Letsencrypt } from 'styled-icons/simple-icons';

const CharContext = createContext();

const AppContext = ({ children }) => {
  const [chars, setChars] = useState({});
  const [charActive, setCharActive] = useState({});
  const [noCharsFound, setNoCharsFound] = useState(true);

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
    setCharActive(charActiveFiltered[0])
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

    let charsFiltered = charsParsed.chars.filter(
      (char) => char.id !== charId
    );

    charsFiltered.push(charObj);
    const charsToLocalStorage = {
      chars: charsFiltered
    }
    localStorage.setItem('chars', JSON.stringify(charsToLocalStorage));
    setChars(charsToLocalStorage.chars);
    setCharActive(charObj)
    alert('Character successfully edited.');
    return;
  };

  const deleteChar = (charId) => {
    if(confirm("Do you really want to delete this character?")) {
      const charsFromLocalStorage = localStorage.getItem('chars');
      const charsParsed = JSON.parse(charsFromLocalStorage);
      const charsFiltered = charsParsed.chars.filter(
        (char) => char.id !== charId
      );
      if (charsFiltered.length === 0) {
        setNoCharsFound(true)
        localStorage.removeItem('chars')
        setChars({})
        setCharActive({})
        alert("Character deleted!")
        return Trash2Outline
      }

      const charsToLocalStorage = {
        chars: charsFiltered
      }

      localStorage.setItem('chars', JSON.stringify(charsToLocalStorage));
      setChars(charsToLocalStorage.chars);
      setCharActive(charsToLocalStorage.chars[0])
      alert("Character deleted!")
      return true
    }
    return false
  }

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

  return (
    <CharContext.Provider
      value={{
        chars,
        charActive,
        noCharsFound,
        createNewChar,
        editChar,
        setActiveChar,
        deleteChar
      }}
    >
      {children}
    </CharContext.Provider>
  );
};

export { AppContext, CharContext };
