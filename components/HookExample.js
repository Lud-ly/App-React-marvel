import React, { useState } from 'react';

import Button from '@material-ui/core/Button';

function HookExample() {
  const [count, setCount] = useState(0);
  const [countOver, setCountOver] = useState(0);
  const [name, setName] = useState('-------------CaptainCode-----------------');
  const [age, setAge] = useState('1');
  const [grandir, setGrandir] = useState(0);

  return (
    <div>
      <h1 style={{ color: 'blue' }}>
        {count}
        {countOver} {name} {age}
        {grandir}
        {name}
        {count}
        {age}
        {countOver}{' '}
      </h1>
      <h1 style={{ color: 'yellow' }}>
        {count} AGILE {age} NPM {countOver} MOUSE enter
        {grandir} {name} COMMIT
        {count}
        {countOver}
      </h1>
      <h1 style={{ color: 'red' }}>
        {countOver} HOOK {name} WEBPACK {count}
        {age} RENDER {name}
        {grandir} COMPONENTS {age}
        {countOver} MATERIAL UI
        {count}
      </h1>
      <Button
        variant="contained"
        color="secondary"
        onMouseLeave={() => setGrandir(grandir + 1000)}
        onClick={() => setCount(count + 33.33)}
        onClick={() => setCountOver(countOver + 3450)}
        onMouseLeave={() =>
          setName(
            '-----!!!!!!!!!!------------LUDO DEV with LM--------????????----------',
          )
        }
        onMouseEnter={() =>
          setAge('-------$CODE THE WEB----------------------')
        }
      >
        CLICK AND MOUSE ENTER
      </Button>
      <Button
        variant="outlined"
        color="primary"
        onMouseLeave={() => setGrandir(grandir + 1000)}
        onClick={() => setCount(count + 33.33)}
        onClick={() => setCountOver(countOver + 3450)}
        onMouseLeave={() =>
          setName(
            '-----CAPTAINCODE REACTJS!!---,BOILERPLATE----GIT-----LUDO DEV with LM--------????????----------',
          )
        }
        onMouseEnter={() =>
          setAge(
            '-------$CODE THE WEB----FOR USE-------GITHUB-----CONTAINER------',
          )
        }
      >
        CLICK AND MOUSE ENTER
      </Button>
      <Button
        variant="default"
        color="secondary"
        onMouseLeave={() => setGrandir(grandir + 1000)}
        onClick={() => setCount(count + 33.33)}
        onMouseLeave={() => setCountOver(countOver + 3450)}
        onMouseEnter={() =>
          setName(
            '-----!!!!!!!!!!------------LUDO DEV with LM--------????????----------',
          )
        }
        onMouseEnter={() =>
          setAge('-------$CODE THE WEB----------------------')
        }
      >
        > CLICK AND MOUSE ENTER
      </Button>
    </div>
  );
}

export default HookExample;
