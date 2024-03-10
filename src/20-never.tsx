interface PrimaryProps {
  primary: boolean;
  secondary?: never;
}
interface SecondaryProps {
  secondary: boolean;
  primary?: never;
}

type Props = React.ComponentProps<'button'> & (PrimaryProps | SecondaryProps);

function Button({ children, primary, secondary, ...rest }: Props) {
  console.log('primary', primary);
  console.log('secondary', secondary);
  return (
    <button {...rest}>
      <big>{children}</big>
    </button>
  );
}

export default function Never() {
  return (
    // can't have both primary and secondary
    <Button primary secondary className="p-4 rounded bg-red-400">
      Button
    </Button>
  );
}
