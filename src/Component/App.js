import { useState } from "react";
import Display from "./Display";
import { theme , lang } from "../utilities/theme";
import { Provider } from "./MyContext";
import "../assets/css/App.css";

const App = () => {
  const [gettheme, settheme] = useState(theme.theme1);
  const [getlang, setlang] = useState(lang.en)

  const setTheme = (thm) => {
    if (thm === "theme1") settheme(theme.theme1);
    else if (thm === "theme2") settheme(theme.theme2);
    else settheme(theme.theme3);
  };

  const setLang = (lan) => {
    if (lan === 'en') setlang(lang.en);
    else if (lan === 'arabic') setlang(lang.arabic);
    else setlang(lang.hindi);
  }

  return (
    <Provider value={[gettheme,getlang]}>
      <Display theme={(value) => setTheme(value)} lang={value => setLang(value)}/>
    </Provider>
  );
};

export default App;