import { useState } from 'react';

interface PropsOfHOC {
  name: string;
}

interface PropsOfOriComp {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

function ClickCounter({ count, setCount, name }: PropsOfOriComp & PropsOfHOC) {
  return (
    <>
      <p>Name: {name}</p>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <p>Clicked: {count}</p>
    </>
  );
}

function HoverCounter({ count, setCount, name }: PropsOfOriComp & PropsOfHOC) {
  return (
    <>
      <p>Name: {name}</p>
      <button onMouseOver={() => setCount((c) => c + 1)}>Increment</button>
      <p>Clicked: {count}</p>
    </>
  );
}

function hocFn<OriProps extends PropsOfHOC>(
  OriComponent: React.ComponentType<OriProps>
) {
  return function EnhancedComponent(props: PropsOfHOC) {
    const [count, setCount] = useState(0); // these 2 are shared props
    return (
      <OriComponent
        {...(props as OriProps)}
        count={count}
        setCount={setCount}
      />
    );
  };
}

export const EnhancedClickCounter = hocFn(ClickCounter);
export const EnhancedHoverCounter = hocFn(HoverCounter);
