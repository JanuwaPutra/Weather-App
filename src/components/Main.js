import { useContext } from "react";
import "../styles/components/Main.scss";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";
import WeatherContext from "../context/weather.context";
import Loader from "./Loader";

function Main() {
  const { loading, currentWeather, dailyForecast, hourlyForecast } =
    useContext(WeatherContext);
  return (
    <div className="Main">
      {loading ? (
        <Loader />
      ) : (
        <>
          {" "}
          <CurrentWeather data={currentWeather} />
          <Forecast
            type="hourly"
            title="PERKIRAAN WAKTU PER JAM"
            data={hourlyForecast}
          />
          <Forecast
            type="dail"
            title="PERKIRAAN 21 HARI"
            data={dailyForecast}
          />
        </>
      )}
    </div>
  );
}

export default Main;
