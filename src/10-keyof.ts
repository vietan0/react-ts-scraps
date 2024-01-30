type Obj = {
  0: "a";
  1: "b";
  prop0: "c";
  prop1: "d";
};

type ValOfProp0 = Obj["prop0"]; // "c"
type ValOfAll = Obj[keyof Obj]; // "c" | "d" | "a" | "b"

// typeof
const colors = ["red", "green", "blue"] as const;
type Color = (typeof colors)[number];
