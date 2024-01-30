// ComponentProps can take 2 kinds of generic <"button" | typeof Card>
// 1. Wrap around HTML Element: <"button">
interface MyButtonProps extends React.ComponentProps<'button'> {
  name: string;
  age: number;
}

function MyButton({ name, age, ...rest }: MyButtonProps) {
  return (
    <button {...rest}>
      {name} + {age}
    </button>
  );
}

// 2. Wrap around a component: <typeof MyButton>
interface WrapperProps extends React.ComponentProps<typeof MyButton> {
  wrapColor: 'red' | 'blue';
}
export default function ButtonWrapper({ wrapColor, ...rest }: WrapperProps) {
  return (
    <div
      className={`${
        wrapColor === 'red' ? 'border-red-500' : 'border-blue-500'
      } border-4 p-4 w-fit`}
    >
      <MyButton {...rest} />
    </div>
  );
}
