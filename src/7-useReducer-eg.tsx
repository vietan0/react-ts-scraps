import { useReducer } from "react";

type CounterAction = { type: "increment" | "decrement" | "reset" };
function reducerFn(state: number, action: CounterAction) {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return 0;
  }
}

export default function Counter() {
  const [count, dispatch] = useReducer(reducerFn, 0);
  return (
    <main className="Counter">
      <h1>Days Since Last Incident</h1>
      <p className="count">{count}</p>
      <section className="controls">
        <button onClick={() => dispatch({ type: "increment" })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
        <button onClick={() => dispatch({ type: "decrement" })}>
          Decrement
        </button>
      </section>
    </main>
  );
}
