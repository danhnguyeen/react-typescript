import { createContext } from 'react';

const initialState = {
  first: '',
  last: '',
}

export type UserState = typeof initialState & { setUser?: () => void };

const context = createContext<typeof initialState>(initialState)

export default context;