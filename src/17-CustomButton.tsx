interface OldAndNewProps extends React.ComponentProps<'button'> {
  myOwnProp: string;
}
export default function CustomButton({ myOwnProp, ...rest }: OldAndNewProps) {
  return <button {...rest}>{myOwnProp || 'CustomButton'}</button>;
}
