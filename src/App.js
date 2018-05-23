import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "571cc7636508738353274c3130686dd6";

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    pressure: undefined,
    wind_direction: undefined,
    wind_speed: undefined,
    description: undefined,
    description_img: undefined,
    error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault();
    const lang = "fr"
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&lang=${lang}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    if (city && country) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        wind_direction: data.wind.speed,
        wind_speed: data.wind.deg,
        description: data.weather[0].description,
        description_img: data.weather[0].icon,
        error: ""
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        pressure: undefined,
        wind_direction: undefined,
        wind_speed: undefined,
        description: undefined,
        description_img: undefined,
        error: "Please enter the values."
      });
    }
  }
  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Titles />
                </div>
                <div className="col-xs-7 form-container">
                  <Form getWeather={this.getWeather} />
                  <Weather 
                    temperature={this.state.temperature} 
                    humidity={this.state.humidity}
                    city={this.state.city}
                    country={this.state.country}
                    pressure={this.state.pressure}
                    wind_direction={this.state.wind_direction}
                    wind_speed={this.state.wind_speed}
                    description={this.state.description}
                    description_img={this.state.description_img}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default App;