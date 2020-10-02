import React from 'react';
import { useDencrypt } from 'use-dencrypt-effect';

const values = [
  'WELCOME TO MY FIRST APP REACT',
  'STARTER KIT REACT BOILERPLATE',
  'SINGLE PAGE APP',
  'SEARCH PERSONNAGES MARVEL',
  'TRY ALL REPOSITORIES ON GITHUB',
  'SEARCH EVENTS MARVEL',
  'GO TO LUDOVIC-MOULY .COM',
  'SEARCH COMICS MARVEL',
];

const TextEffect = () => {
  const { result, dencrypt } = useDencrypt();

  React.useEffect(() => {
    let i = 0;

    const action = setInterval(() => {
      dencrypt(values[i]);

      i = i === values.length - 1 ? 0 : i + 1;
    }, 4000);

    return () => clearInterval(action);
  }, []);

  return <h1>{result}</h1>;
};

export default TextEffect;
