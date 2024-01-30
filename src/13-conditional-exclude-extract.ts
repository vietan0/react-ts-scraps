/* eslint-disable @typescript-eslint/ban-types */
// https://www.typescriptlang.org/docs/handbook/utility-types.html

type CondType<A, B> = A extends B ? number : string;
type T1 = CondType<{ x: number; y: string }, { x: number }>; // number

// Exclude (built-in):
// type Exclude<T, U> = T extends U ? never : T
type T2 = Exclude<1 | 2 | "a" | "b", string>; // 1 | 2

type T3 = Exclude<string | number | (() => void), Function>;

// exclude objects
type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; x: number }
  | { kind: "triangle"; x: number; y: number };

type T4 = Exclude<Shape, { kind: "circle" }>;

// Extract (built-in)
type T5 = Extract<string | number | (() => void), Function>;
