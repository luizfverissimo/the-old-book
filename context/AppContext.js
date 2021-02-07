import React, { createContext, useState, useEffect } from 'react';

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

    console.log("Chars:", charsParsed.chars)
    console.log("Char Active:", charActiveFiltered[0])

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

    const charsFiltered = charsParsed.chars.filter(
      (char) => char.id !== charId
    );
    charsFiltered.push(charObj);
    localStorage.setItem('chars', JSON.stringify(charsFiltered));
    setChars(charsFiltered.chars);
    alert('Character successfully created.');
    return;
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
    setChars(charsParsed.chars)

    let charActive = chars.filter((char) => char.id === id);
    charActive[0].isActive = true;
    console.log(charActive[0])
    setCharActive(charActive[0]);
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
        setActiveChar
      }}
    >
      {children}
    </CharContext.Provider>
  );
};

export { AppContext, CharContext };
