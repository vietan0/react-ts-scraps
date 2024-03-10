// https://www.freecodecamp.org/news/build-strongly-typed-polymorphic-components-with-react-and-typescript/#how-to-build-your-first-polymorphic-component
type Rgb = 'red' | 'green' | 'blue';

type TextProps<C extends React.ElementType> = {
  // custom props only
  as?: C;
  color?: Rgb | 'black';
};

type Props<C extends React.ElementType> = React.PropsWithChildren<
  TextProps<C>
> &
  Omit<React.ComponentPropsWithoutRef<C>, keyof TextProps<C>>;
// Props = custom props + children + (component props - component props that have same name as custom props)

export default function Text<C extends React.ElementType = 'span'>({
  as,
  color,
  children,
  ...restProps
}: Props<C>) {
  const Component = as || 'span';
  const style = color ? { style: { color } } : {};
  return (
    <Component {...restProps} {...style}>
      {children}
    </Component>
  );
}
