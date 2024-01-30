type CustomProps<E extends React.ElementType> = {
  as?: E;
};

// props = custom props + children + component props - the ones that have same name as custom props
type Props<E extends React.ElementType> = React.PropsWithChildren<
  CustomProps<E>
> &
  Omit<React.ComponentPropsWithoutRef<E>, keyof CustomProps<E>>;

function Text<E extends React.ElementType = 'a'>({
  as,
  color,
  children,
  ...rest
}: Props<E>) {
  const TagName = as || 'a';
  const style = color ? { color } : {};
  return (
    <TagName {...style} {...rest}>
      {children}
    </TagName>
  );
}

const Application = () => {
  return (
    <main>
      <Text>Hey</Text>
      <Text color="blue">Hey</Text>
      <Text href="#">Hey</Text>
      <Text as="a" href="#">
        Hey
      </Text>
    </main>
  );
};

export default Application;
