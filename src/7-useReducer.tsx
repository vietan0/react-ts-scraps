import { useContext, useReducer } from "react";
import { ThemeContext } from "./8-context";

type Direction = "up" | "down" | "left" | "right";
type Value = Direction | "clear";
type State = Direction[];
type Action = { type: Value };
const mapObj: Record<Direction, string> = {
  up: "↑",
  down: "↓",
  left: "←",
  right: "→",
};

function reducerFn(state: State, action: Action) {
  if (action.type === "clear") return [];
  else return [...state, action.type];
}

export default function ArrowButtons() {
  const [arrowHistory, arrowDispatch] = useReducer(reducerFn, []);
  const { theme, dispatch: themeDispatch } = useContext(ThemeContext);

  function switchThemeFn() {
    themeDispatch({ type: "switch" });
  }

  function handleClickClear() {
    arrowDispatch({ type: "clear" });
  }
  function handleClickUp() {
    arrowDispatch({ type: "up" });
  }
  function handleClickDown() {
    arrowDispatch({ type: "down" });
  }
  function handleClickLeft() {
    arrowDispatch({ type: "left" });
  }
  function handleClickRight() {
    arrowDispatch({ type: "right" });
  }
  return (
    <div
      className={
        theme === "light"
          ? "bg-slate-50 text-gray-900"
          : "bg-slate-800 text-white"
      }
    >
      <button
        onClick={switchThemeFn}
        className={`${
          theme === "light" ? "bg-blue-300" : "bg-blue-500"
        } p-4 rounded`}
      >
        Theme: {theme}
      </button>
      <div className="[&>*]:outline [&>*]:outline-black text-5xl grid grid-cols-[repeat(3,_100px)] grid-rows-[repeat(2,_100px)]">
        <button className="hover:bg-black/50" onClick={handleClickUp}>
          ↑
        </button>
        <button className="hover:bg-black/50" onClick={handleClickDown}>
          ↓
        </button>
        <button className="hover:bg-black/50" onClick={handleClickLeft}>
          ←
        </button>
        <button className="hover:bg-black/50" onClick={handleClickRight}>
          →
        </button>
      </div>
      <div>
        <p>
          History:
          {arrowHistory.map((s, i) => (
            <span key={i}>{mapObj[s]} </span>
          ))}
        </p>
        <button
          onClick={handleClickClear}
          className="border border-black hover:bg-black/50"
        >
          Clear History
        </button>
      </div>
    </div>
  );
}
