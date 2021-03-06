import React, { useEffect, useState } from "react";

export default function Header() {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const fecthApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=27fc311b90d73d3e0441aab8354700ec`;
      const response = await fetch(url);
      const resJson = await response.json();
      setCity(resJson.main);
    };
    fecthApi();
  }, [search]);

  return (
    <>
      <div className="app-container" data-theme="dark">
        <div className="app-top-bar">
          <h1 className="app-heading">
            World Weather Information Service<br></br>Official Forecasts
          </h1>
        </div>

        <div className="app-content">
          <div className="inputdata">
            <input
              placeholder=" City Name..."
              value={search}
              type="search"
              className="inputFeild"
              onChange={(event) => setSearch(event.target.value)}
            />
          </div>

          <div className="button button-dial">
            <span className="button-dial-spoke"></span>
            <span className="button-dial-spoke"></span>
            <span className="button-dial-spoke"></span>
            <span className="button-dial-spoke"></span>
            <span className="button-dial-spoke"></span>
            <span className="button-dial-spoke"></span>

            <div className="button-dial-top"></div>
            <div className="button-dial-label">
              {!city ? (
                <i className="fa fa-thermometer-full teal-color"></i>
              ) : (
                <div>{city.temp}°C</div>
              )}
            </div>
          </div>
          <div className="flex-button-container">
            <button className="button button-large">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
                data-icon="snowflake"
                className="color-cool"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M440.1 355.2l-39.2-23 34.1-9.3c8.4-2.3 13.4-11.1 11.1-19.6l-4.1-15.5c-2.2-8.5-10.9-13.6-19.3-11.3L343 298.2 271.2 256l71.9-42.2 79.7 21.7c8.4 2.3 17-2.8 19.3-11.3l4.1-15.5c2.2-8.5-2.7-17.3-11.1-19.6l-34.1-9.3 39.2-23c7.5-4.4 10.1-14.2 5.8-21.9l-7.9-13.9c-4.3-7.7-14-10.3-21.5-5.9l-39.2 23 9.1-34.7c2.2-8.5-2.7-17.3-11.1-19.6l-15.2-4.1c-8.4-2.3-17 2.8-19.3 11.3l-21.3 81-71.9 42.2v-84.5L306 70.4c6.1-6.2 6.1-16.4 0-22.6l-11.1-11.3c-6.1-6.2-16.1-6.2-22.2 0l-24.9 25.4V16c0-8.8-7-16-15.7-16h-15.7c-8.7 0-15.7 7.2-15.7 16v46.1l-24.9-25.4c-6.1-6.2-16.1-6.2-22.2 0L142.1 48c-6.1 6.2-6.1 16.4 0 22.6l58.3 59.3v84.5l-71.9-42.2-21.3-81c-2.2-8.5-10.9-13.6-19.3-11.3L72.7 84c-8.4 2.3-13.4 11.1-11.1 19.6l9.1 34.7-39.2-23c-7.5-4.4-17.1-1.8-21.5 5.9l-7.9 13.9c-4.3 7.7-1.8 17.4 5.8 21.9l39.2 23-34.1 9.1c-8.4 2.3-13.4 11.1-11.1 19.6L6 224.2c2.2 8.5 10.9 13.6 19.3 11.3l79.7-21.7 71.9 42.2-71.9 42.2-79.7-21.7c-8.4-2.3-17 2.8-19.3 11.3l-4.1 15.5c-2.2 8.5 2.7 17.3 11.1 19.6l34.1 9.3-39.2 23c-7.5 4.4-10.1 14.2-5.8 21.9L10 391c4.3 7.7 14 10.3 21.5 5.9l39.2-23-9.1 34.7c-2.2 8.5 2.7 17.3 11.1 19.6l15.2 4.1c8.4 2.3 17-2.8 19.3-11.3l21.3-81 71.9-42.2v84.5l-58.3 59.3c-6.1 6.2-6.1 16.4 0 22.6l11.1 11.3c6.1 6.2 16.1 6.2 22.2 0l24.9-25.4V496c0 8.8 7 16 15.7 16h15.7c8.7 0 15.7-7.2 15.7-16v-46.1l24.9 25.4c6.1 6.2 16.1 6.2 22.2 0l11.1-11.3c6.1-6.2 6.1-16.4 0-22.6l-58.3-59.3v-84.5l71.9 42.2 21.3 81c2.2 8.5 10.9 13.6 19.3 11.3L375 428c8.4-2.3 13.4-11.1 11.1-19.6l-9.1-34.7 39.2 23c7.5 4.4 17.1 1.8 21.5-5.9l7.9-13.9c4.6-7.5 2.1-17.3-5.5-21.7z"
                ></path>
              </svg>
              {!city ? (
                <i></i>
              ) : (
                <div>
                  <h6 className="tempmin_max">
                    <pre className="prename">
                      Min : {city.temp_min}°C <br></br><br></br>
                      Humidity : {city.humidity}
                      <br></br><br></br>
                      Sea-level : {city.sea_level} <br></br><br></br>
                    </pre>
                  </h6>

                  {/* </div> */}
                </div>
              )}
            </button>
            <button className="button button-large1">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="fire-alt"
                className="color-warm"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M323.56 51.2c-20.8 19.3-39.58 39.59-56.22 59.97C240.08 73.62 206.28 35.53 168 0 69.74 91.17 0 209.96 0 281.6 0 408.85 100.29 512 224 512s224-103.15 224-230.4c0-53.27-51.98-163.14-124.44-230.4zm-19.47 340.65C282.43 407.01 255.72 416 226.86 416 154.71 416 96 368.26 96 290.75c0-38.61 24.31-72.63 72.79-130.75 6.93 7.98 98.83 125.34 98.83 125.34l58.63-66.88c4.14 6.85 7.91 13.55 11.27 19.97 27.35 52.19 15.81 118.97-33.43 153.42z"
                ></path>
              </svg>
              {!city ? (
                <i></i>
              ) : (
                <div>
                  <h6 className="tempmin_max">
                    <pre className="prename">
                      Max : {city.temp_max}°C <br></br><br></br>
                      Pressure : {city.pressure}
                      <br></br><br></br>
                      Ground level: {city.grnd_level}<br></br><br></br>
                      
                    </pre>
                  </h6>
                </div>
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
