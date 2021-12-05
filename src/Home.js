/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import forka from "./forecas.json";
import lo from "./img/1.gif";
import p from "./img/4.gif";
import up from "./img/3.gif";
import Typed from "react-typed";
import foreca from "./img/forecast1.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import "./Navbar.css";
import InvertColorsIcon from "@mui/icons-material/InvertColors";
import CloudIcon from "@mui/icons-material/Cloud";
import SpeedIcon from "@mui/icons-material/Speed";
import DirectionsIcon from "@mui/icons-material/Directions";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import AOS from "aos";
// import axios from "axios";
const Home = () => {
  const [data, setData] = useState({});
  const [values, setValue] = useState("");
  var api_key = "a0c9cb10e85d471187a52135210512";
  var location;

  location = "Bangalore";

  if (values) {
    location = values;
  }

  const url = `https://api.weatherapi.com/v1/forecast.json?key=${api_key}&q=${location}&days=5&aqi=yes`;

  // useEffect(() => {
  //    axios.get(url).then((response) => {
  //   const we = response.data;
  //   setTimeout(() => {
  //     setData(we);
  //     console.log(data);
  //   }, 3000);
  // });
  // }, []);

  const fetch_weather = () => {
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        setTimeout(() => {
          setData(response);
          console.log(data);
        }, 13000);
      });
  };

  const search = (e) => {
    e.preventDefault();
    if (values) {
      fetch_weather();
    } else {
      console.log("enter your location");
    }
  };

  useEffect(() => {
    fetch_weather();
    AOS.init();
  }, []);

  const modal = () => {
    return (
      <div>
        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Today in {forka.location.name}{" "}
                  {forka.location.localtime.slice(0, 11)}
                  Per Hour details
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <table className="table table-hover table-bordered border-primary hour_data">
                  <thead>
                    <tr>
                      <th>Time</th>
                      <th>temp {"\u00b0"}c</th>
                      <th>condition</th>
                      <th>situation</th>
                    </tr>
                  </thead>
                  <tbody>
                    {forka.forecast.forecastday[0].hour.map((forka, index) => (
                      <tr key={index}>
                        <td> {forka.time.slice(11)}</td>
                        <td>
                          {forka.temp_c}
                          {"\u00b0"}
                        </td>
                        <td> {forka.condition.text}</td>
                        <td>
                          <img src={forka.condition.icon} alt="icon" />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        <button
          data-aos="fade-right"
          data-aos-duration="1000"
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Per Hour details
        </button>
      </div>
    );
  };
  const Navbar = () => {
    return (
      <div
        className="container-fluid"
        tabindex="0"
        style={{
          boxShadow: "3px 3px 7px  rgba(0, 0, 255, .2)",
          position: "fixed",
          padding: "0px",
          zIndex: "1",
        }}
      >
        <nav className="navbar navbar-expand-md navbar-light bg-light">
          <img src={foreca} alt="fore" />
          <a
            className="navbar-brand"
            href="/"
            style={{ margin: "0px", padding: "0px" }}
          >
            <h4 className="title">
              weather
              <Typed
                strings={["πρόβλεψη", "Forecast"]}
                typeSpeed={60}
                backSpeed={50}
              />
            </h4>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ margin: "0px 10px 0 0", padding: "0px 0 0 0" }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
            style={{ justifyContent: "right" }}
          >
            <hr />
            <ul className="navbar-nav  mr-auto">
              <li className="nav-item active">
                <a className="nav-link home" href="/">
                  Home
                </a>
              </li>
            </ul>
            <form className="form-inlin my-2 my-lg-0 d-flex">
              <input
                className="form-control mr-sm-2 input_box"
                type="search"
                placeholder="Enter Location"
                aria-label="Search"
                value={values}
                onChange={(e) => setValue(e.target.value)}
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0 search_btn"
                type="submit"
                onClick={search}
              >
                Search
              </button>
            </form>
          </div>
        </nav>
      </div>
    );
  };

  return (
    <div className="container-fluid" style={{ padding: "0px" }}>
      {Navbar()}
      <div className="container-fluid " style={{ padding: "0px" }}>
        <div
          className="row"
          style={{ margin: "0px", backgroundColor: "#0072f5" }}
        >
          <div
            style={{
              margin: "125px 0 20px 0px",
              fontFamily: "Muli,Helvetica Neue,Helvetica,Arial,sans-serif",
            }}
          >
            <p className="text-light">
              world {">"} {forka.location.country} {">"} {forka.location.region}{" "}
              {">"} {forka.location.name}
            </p>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm ml-0 mr-0">
            <div
              style={{
                boxShadow: "-3px -3px 7px #0072f5, 3px 3px 5px #0072f5",
                margin: "0px 0 0 0",
              }}
            >
              <div
                className="card"
                style={{
                  fontFamily: "Muli,Helvetica Neue,Helvetica,Arial,sans-serif",
                  borderRadius: "16px",
                }}
              >
                <h4 className="today_data">
                  <img src={lo} alt="location" width="30px" height="30px" />
                  Weather in {forka.location.name},{forka.location.country}
                </h4>
                <div className="d-flex">
                  <img
                    className="today_icon"
                    src={forka.current.condition.icon}
                    alt="Partly cloudy"
                    width="100px"
                    height="120px"
                  />
                  <h3 style={{ margin: "30px 0 0 10px", fontSize: "55px" }}>
                    {forka.current.temp_c}
                    {"\u00b0"}
                  </h3>
                  <p className="condtion_text">
                    <b> {forka.current.condition.text}</b>
                    <p style={{ opacity: "0.6", margin: "0px" }}>
                      Feels Like {forka.current.feelslike_c}
                      {"\u00b0"}
                    </p>
                    <p style={{ opacity: "0.6", margin: "0px" }}>
                      <ArrowUpwardIcon />
                      {forka.forecast.forecastday[0].day.maxtemp_c}
                      {"\u00b0"} <ArrowDownwardIcon />
                      {forka.forecast.forecastday[0].day.mintemp_c}
                      {"\u00b0"}
                    </p>
                  </p>
                </div>
                <p className="time_data">
                  Time in {forka.location.name}
                  {"  "}
                  {forka.location.localtime.slice()}
                </p>
                <div className="mod">{modal()}</div>
                <hr />
                <div className="Aqi">
                  <ul
                    style={{
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <li>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                        }}
                      >
                        <InvertColorsIcon color="primary" />
                        <p
                          style={{
                            margin: "0px 0  0px 5px",
                          }}
                        >
                          Humidity
                        </p>
                      </div>
                      <b
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          margin: "0px 0  0px 45px",
                        }}
                      >
                        {forka.current.humidity}%
                      </b>
                    </li>
                    <li
                      style={{
                        margin: "0 0 0 65px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                        }}
                      >
                        <CloudIcon color="primary" />
                        <p
                          style={{
                            margin: "0px 0  0px 5px",
                          }}
                        >
                          Clouds
                        </p>
                      </div>
                      <b
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          margin: "0px 0  0px 40px",
                        }}
                      >
                        {forka.current.cloud}%
                      </b>
                    </li>
                  </ul>
                  <ul
                    style={{
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <li>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                        }}
                      >
                        <SpeedIcon color="primary" />
                        <p
                          style={{
                            margin: "0px 0  0px 5px",
                          }}
                        >
                          Max Wind
                        </p>
                      </div>
                      <b
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          margin: "0px 0  0px 30px",
                        }}
                      >
                        {forka.current.wind_kph}km/h
                      </b>
                    </li>
                    <li
                      style={{
                        margin: "0 0 0 55px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                        }}
                      >
                        <DirectionsIcon color="primary" />
                        <p
                          style={{
                            margin: "0px 0  0px 5px",
                          }}
                        >
                          Wind direction
                        </p>
                      </div>
                      <b
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          margin: "0px 0  0px 63px",
                        }}
                      >
                        {forka.current.wind_dir}
                      </b>
                    </li>
                  </ul>
                  <ul
                    style={{
                      margin: "0 0 0 80px",
                    }}
                  >
                    <li
                      style={{
                        margin: "0px 0  0px 0px",
                        display: "flex",
                        flexDirection: "row",
                      }}
                    >
                      <img src={p} alt="air" width="40px" height="40px" />
                      <p
                        style={{
                          margin: "12px 0 0 5px",
                        }}
                      >
                        AQI
                      </p>
                    </li>
                  </ul>
                  <ul
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      margin: "20px 0 0 0px",
                    }}
                  >
                    <li>
                      Co: {parseFloat(forka.current.air_quality.co).toFixed(2)}
                    </li>
                    <li
                      style={{
                        margin: "0 0 0 125px",
                      }}
                    >
                      No2:{" "}
                      {parseFloat(forka.current.air_quality.no2).toFixed(2)}
                    </li>
                  </ul>
                  <ul
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      margin: "20px 0 0 0px",
                    }}
                  >
                    <li>
                      o3: {parseFloat(forka.current.air_quality.o3).toFixed(2)}
                    </li>
                    <li
                      style={{
                        margin: "0 0 40px 153px",
                      }}
                    >
                      So2:{" "}
                      {parseFloat(forka.current.air_quality.so2).toFixed(2)}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-8 col-lg-8 col-md-8 col-sm ml-0 mr-0 mt-2">
            <div
              style={{
                boxShadow: "-3px -3px 7px #0072f5, 3px 3px 5px #0072f5",
              }}
            >
              <div
                className="card next_day_head"
                data-aos-duration="1000"
                data-aos="zoom-in-up"
              >
                <b className="calender">
                  <img src={up} alt="location" width="30px" height="30px" />
                  Upcoming days
                </b>
                <div className="center_card">
                  <div
                    className="card next_day"
                    data-aos="fade-down"
                    data-aos-duration="2000"
                  >
                    <h4 className="today_data">
                      <img src={lo} alt="location" width="30px" height="30px" />
                      Weather in {forka.location.name},{forka.location.country}
                    </h4>
                    <div className="d-flex">
                      <img
                        src={forka.forecast.forecastday[1].day.condition.icon}
                        alt="Partly cloudy"
                        width="100px"
                        height="120px"
                      />
                      <h3 className="font">
                        {forka.forecast.forecastday[1].day.avgtemp_c}
                        {"\u00b0"}
                      </h3>
                      <p className="condtion_text">
                        <b>
                          {" "}
                          {forka.forecast.forecastday[1].day.condition.text}
                        </b>
                        <p style={{ opacity: "0.6", margin: "0px" }}>
                          <ArrowUpwardIcon />
                          {forka.forecast.forecastday[1].day.maxtemp_c}
                          {"\u00b0"} <ArrowDownwardIcon />
                          {forka.forecast.forecastday[1].day.mintemp_c}
                          {"\u00b0"}
                        </p>
                      </p>
                    </div>
                    <p className="time_data">
                      Time in {forka.location.name}
                      {"  "}
                      {forka.forecast.forecastday[1].date}
                    </p>
                  </div>
                  <div
                    className="card next_day1"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                  >
                    <h4 className="today_data">
                      <img src={lo} alt="location" width="30px" height="30px" />
                      Weather in {forka.location.name},{forka.location.country}
                    </h4>
                    <div className="d-flex">
                      <img
                        src={forka.forecast.forecastday[2].day.condition.icon}
                        alt="Partly cloudy"
                        width="100px"
                        height="120px"
                      />
                      <h3 className="font">
                        {forka.forecast.forecastday[2].day.avgtemp_c}
                        {"\u00b0"}
                      </h3>
                      <p className="condtion_text">
                        <b>
                          {" "}
                          {forka.forecast.forecastday[2].day.condition.text}
                        </b>
                        <p style={{ opacity: "0.6", margin: "0px" }}>
                          <ArrowUpwardIcon />
                          {forka.forecast.forecastday[2].day.maxtemp_c}
                          {"\u00b0"} <ArrowDownwardIcon />
                          {forka.forecast.forecastday[2].day.mintemp_c}
                          {"\u00b0"}
                        </p>
                      </p>
                    </div>
                    <p className="time_data">
                      Time in {forka.location.name}
                      {"  "}
                      {forka.forecast.forecastday[2].date}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
