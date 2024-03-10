// https://react-typescript-cheatsheet.netlify.app/docs/advanced/patterns_by_usecase/#definitely-not-reacthtmlprops-or-reacthtmlattributes

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  specialProp: string;
}
export default function Button(props: ButtonProps) {
  const { specialProp, ...rest } = props;
  // ERROR: Type 'string' is not assignable to type '"button" | "submit" | "reset" | undefined'.
  return <button {...rest} />;
}
