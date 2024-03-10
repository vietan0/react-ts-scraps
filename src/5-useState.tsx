import { useEffect, useState } from 'react';

type Char = {
  id: number;
  name: string;
};

const Application = () => {
  // Type | null - regularly used with api calls
  const [character, setCharacter] = useState<Char | null>(null);
  const [list, setList] = useState<Char[]>([]); // inferred as never if not use generic

  useEffect(() => {
    fetchCharacter().then((c) => {
      setCharacter(c);
    });
  }, []);

  return (
    <main>
      {character ? <CharacterInformation character={character} /> : <Loading />}
    </main>
  );
};
