import { useContext, useState } from "react";
import "../styles/components/Search.scss";
import WeatherContext from "../context/weather.context";

function Search() {
  const { setPlace } = useContext(WeatherContext);
  const [text, setText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [openSearchResults, setOpenSearchResults] = useState(false);

  function onSearch(e) {
    const inputText = e.target.value;
    setText(inputText);

    if (inputText) {
      setSearchResults([
        {
          place_id: "disabled",
          name: "Fungsi ini dinonaktifkan karna APINYA BAYAR KOCAK JADINYA KENA LIMIT",
          adm_area1: "",
          country: "",
        },
      ]);
      setOpenSearchResults(true);
    } else {
      setSearchResults([]);
      setOpenSearchResults(false);
    }
  }

  const changePlace = (place) => {
    // Hanya ganti tempat jika place_id bukan "disabled"
    if (place.place_id !== "disabled") {
      setPlace(place);
      setText("");
      setOpenSearchResults(false);
    }
  };

  return (
    <>
      <div className="search-container">
        <div className="search-icon">
          <i className="bi bi-search"></i>
        </div>
        <div className="search-input">
          <input
            type="text"
            name="search-city"
            placeholder="Search city ..."
            value={text}
            onChange={onSearch}
          />
        </div>
        {openSearchResults && (
          <div className="search-results">
            <div className="results-container">
              {searchResults.map((place) => (
                <div
                  className={`result ${
                    place.place_id === "disabled" ? "disabled" : ""
                  }`}
                  key={place.place_id}
                  onClick={() => changePlace(place)}
                >
                  {place.name}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Search;
