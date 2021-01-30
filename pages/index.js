import CharTitle from '../components/CharTitle';
import Navbar from '../components/Navbar';

import * as S from '../styles/Home';

export default function Home() {
  return (
    <S.Content>
      <Navbar />
      <CharTitle
        name='Rydel Theharice'
        charClass='Sorcerer'
        race='Elf'
        level='02'
      />
    </S.Content>
  );
}
