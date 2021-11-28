import { createContext, useReducer, Dispatch } from "react";

type DefaultState = {
  darkMode: boolean;
};

const defaultState: DefaultState = { darkMode: false };
export const ThemeContext = createContext<{
  state: DefaultState;
  dispatch: Dispatch<any>;
}>({ state: defaultState, dispatch: () => null });

type Action = {
  type: "LIGHTMODE" | "DARKMODE";
  payload?: any;
};

const themeReducer = (state = defaultState, action: Action) => {
  switch (action.type) {
    case "LIGHTMODE":
      return { darkMode: false };
    case "DARKMODE":
      return { darkMode: true };
    default:
      return state;
  }
};

export const ThemeProvider = (props: any) => {
  const [state, dispatch] = useReducer(themeReducer, defaultState);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
