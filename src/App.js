import { useContext } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import "./styles/components/App.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import WeatherContext from "./context/theme.context";

function App() {
  const { dark } = useContext(WeatherContext);
  return (
    <div className={`App-${dark ? "dark" : "light"}`}>
      <Header />
      <Main />
    </div>
  );
}

export default App;
