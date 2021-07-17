import { createContext } from "react";

export interface UserContextInterface {
  first: string;
  last: string;
  setUser?: () => void;
}

const initialState: UserContextInterface = {
  first: "",
  last: "",
};

const context = createContext<UserContextInterface>(initialState);

export default context;
