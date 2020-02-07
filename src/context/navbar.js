import React from "react";
export const NavbarContext = React.createContext();

export function NavbarProvider({ children }) {
  const [isToggled, setToggled] = React.useState(true);
  //toggles
  const toggleTrueFalse = () => setToggled(!isToggled);
  React.useEffect(() => {
    return () => {};
  }, []);

  return (
    <NavbarContext.Provider value={{ isToggled, setToggled, toggleTrueFalse }}>
      {children}
    </NavbarContext.Provider>
  );
}
