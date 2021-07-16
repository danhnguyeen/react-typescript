import { useReducer } from "react";

const initialState = {
  counter: 0
}

type ACTIONTYPE = { type: 'increment', payload: number }
  | { type: 'decrement', payload: number }
function counterReducer(state: typeof initialState, action: ACTIONTYPE) {
  switch (action.type) {
    case 'increment':
      return { ...state, counter: state.counter++ }
    case 'decrement':
      return { ...state, counter: state.counter-- }
    default: throw new Error('Bad action');
  }
}

function useReducerComponent() {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return <div>
    <p>Count: {state.counter}</p>
    <button onClick={() => dispatch({ type: 'increment', payload: 1 })}>Increase</button>
    <button onClick={() => dispatch({ type: 'decrement', payload: 1 })}>Decrease</button>
  </div>
}

export default useReducerComponent;