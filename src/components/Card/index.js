import React from "react";
import "./style.css";

function Card() {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Employee Directory</h5>
          <p className="card-text">
            This is a directory using the Random User API to display a list of
            employees for a company with React.
          </p>
          <a href="https://guarded-shelf-05214.herokuapp.com/">
            Click here to check it out!
          </a>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Progressive Budget</h5>
          <p className="card-text">
            This is an app to track the expenses that a traveller might have
            while they are in areas without internet connectivity.
          </p>
          <a href="https://tranquil-journey-59657.herokuapp.com/">
            Click here to check it out!
          </a>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Neighborhood Watch</h5>
          <p className="card-text">
            This website allows a user to create a user account, and once signed
            in give ratings on a neighborhood that they are living in or
            travelling through. This gives other users updated on any crime or
            other important information.
          </p>
          <a href="https://neighborhood-appage.herokuapp.com/">
            Click here to check it out!
          </a>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Alltrails AND Parks</h5>
          <p className="card-text">
            This project allows a user to search any city in the United States
            and find nearby parks in that city.
          </p>
          <a href="https://hdezbriant.github.io/AllTrails-AND-Parks/">
            Click here to check it out!
          </a>
        </div>
      </div>
    </div>
  );
}
export default Card;
