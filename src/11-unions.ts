// unions behave oppositely when used with primitives and objects
type Pri1 = "a" | "b" | "c";
type Pri2 = "b" | "c" | "d";
type Pri3 = Pri1 | Pri2; // "a" | "b" | "c" | "d"

type Obj1 = { x: number; shared: boolean };
type Obj2 = { str: string; shared: boolean };
type ObjU = Obj1 | Obj2;

const u: ObjU = {
  x: 2,
  shared: true,
  y: "hey", // can't have both
};
