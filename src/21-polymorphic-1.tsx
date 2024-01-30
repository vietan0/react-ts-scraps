// https://www.freecodecamp.org/news/build-strongly-typed-polymorphic-components-with-react-and-typescript/#how-to-build-your-first-polymorphic-component
type TextProps<C extends React.ElementType> = {
  as?: C;
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<C>;

// ComponentPropsWithoutRef will make C passed to `as` --> can be inferred, while
// ComponentProps will lose it
// use type for TextProps, if use interface will cause error ts(2312)

export default function Text<
  C extends React.ElementType = 'span' /* specify C's default type to be passed from Text to TextProps */
>(
  {
    as,
    children,
    ...restProps
  }: TextProps<C> /* pass C from Text to TextProps */
) {
  // In JS, if as is optional, it’ll default to a span.
  // How does TypeScript handle when as isn’t passed?

  const Component = as || 'span'; // JS only, TS is unaware of this default
  return <Component {...restProps}>{children}</Component>;
}
