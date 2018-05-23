import React from "react";

const Form = props => (
	<form onSubmit={props.getWeather}>
		<input type="text" name="city" placeholder="Ville..."/>
		<input type="text" name="country" placeholder="Pays..."/>
		<button>Afficher votre météo</button>
	</form>
);

export default Form;