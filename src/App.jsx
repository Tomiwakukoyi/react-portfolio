import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
import ProductList from "./components/ProductList/ProductList";
import Contact from "./components/Contact/Contact";
import Toggle from "./components/Toggle/Toggle";
import { useContext, useState } from "react";
import { ThemeContext } from "./Context";
const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  // const [Dark, setDark] = useState(false);
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      <Toggle />
      <Intro />
      <About />
      <ProductList />
      <Contact />
    </div>
  );
};

export default App;
