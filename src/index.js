//Create a React app from scratch.
import React from "react";
import ReactDOM from "react-dom";

const currentHour = new Date().getHours();
let text = "";
//console.log(currentHour);

const color = {
  color: ""
};

if (currentHour < 12) {
  console.log(currentHour + "->1 to 12");
  text = "Morning";
  color.color = "red";
} else if (currentHour < 18) {
  console.log(currentHour + "->13 to 18");
  text = "Afternoon";
  color.color = "green";
} else {
  console.log(currentHour + "->19 to 24");
  text = "Evening";
  color.color = "blue";
}
console.log(color);

ReactDOM.render(
  <div>
    <h1 className="heading" style={color}>
      Good {text}
    </h1>
  </div>,
  document.getElementById("root")
);
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
