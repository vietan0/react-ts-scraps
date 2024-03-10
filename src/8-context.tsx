import React, { createContext, useReducer } from "react";

type Theme = "light" | "dark";
type ThemeContextType = {
  theme: Theme;
  dispatch: React.Dispatch<ThemeAction>;
};
export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  // initially there's no dispatch yet,
  // so assert as ThemeContextType
} as ThemeContextType);

type ThemeProviderProps = {
  children: React.ReactNode;
};

type ThemeAction = {
  type: string;
};

function reducerFn(theme: Theme, action: ThemeAction) {
  if (action.type === "switch") {
    if (theme === "light") return "dark";
    return "light";
  }
  return theme;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, dispatch] = useReducer(reducerFn, "light");
  return (
    <ThemeContext.Provider value={{ theme, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
}
