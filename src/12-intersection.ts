// intersections behave oppositely when used with primitives and objects

type One = 'a' | 'b' | 'c';
type Two = 'b' | 'c' | 'd';
type Three = One & Two; // "b" | "c"

type Four = { x: number; shared: boolean };
type Five = { y: string; shared: boolean };
type Six = Four & Five;
const six: Six = {
  x: 2,
  shared: true, // y: string is missing
};
