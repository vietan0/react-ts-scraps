// https://react-typescript-cheatsheet.netlify.app/docs/advanced/patterns_by_usecase/#definitely-not-reacthtmlprops-or-reacthtmlattributes

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  specialProp: string;
}
export function Button(props: ButtonProps) {
  const { specialProp, ...rest } = props;
  // ERROR: Type 'string' is not assignable to type '"button" | "submit" | "reset" | undefined'.
  return <button {...rest} />;
}

function App() {
  // Property 'type' does not exist on type 'IntrinsicAttributes & ButtonProps'
  // (intersection rule)
  return <Button type="submit">text</Button>;
}
