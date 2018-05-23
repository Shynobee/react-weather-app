import React from "react";

const Weather = props => (
	<div className="weather__info">
		{
			props.city && props.country && <p className="weather__key"> Localisation:
	 		<span className="weather__value"> {props.city}, {props.country}</span>
			</p>
		}
		{
			props.temperature && <p className="weather__key"> Température:
	 		<span className="weather__value"> {props.temperature} °C</span>
			</p>
		}
		{
			props.humidity && <p className="weather__key"> Humidité:
	 		<span className="weather__value"> {props.humidity} %</span>
			</p>
		}
		{
			props.wind_direction && <p className="weather__key"> Direction du vent:
		 	<span className="weather__value"> {props.wind_direction} °</span>
			</p>
		}
		{
			props.wind_speed && <p className="weather__key"> Direction du vent:
		 	<span className="weather__value"> {props.wind_speed / 10} km/h</span>
			</p>
		}
		{
			props.pressure && <p className="weather__key"> Pression Atmosphérique:
		 	<span className="weather__value"> {props.pressure} hPa</span>
			</p>
		}
		{
			props.description && <p className="weather__key"> Conditions:
	 		<span className="weather__value"> {props.description} </span>
			</p>
		}
		{
			props.error && <p className="weather__error">{props.error}</p>
		}
	</div>
);

export default Weather;