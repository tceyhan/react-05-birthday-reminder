import React from "react";
import Button from "./Button";
import "./Main.css";

function Main({ liste, setListe }) {

  function handleClick(id) {
    let tempListe = liste.filter((item) => item.id !== id);
    setListe(tempListe);
  }

  return (
    <div className="main">
      <p className="header">{liste.length} Birthdays Today</p>
      <ul>
        {liste.map((item) => {
          const { id, name, age, img } = item;
          return (
            <li className="birthday-people" key={id}>
              <div className="person-image">
                <img src={img} alt={name} />
              </div>
              <div className="person-info">
                <h4>{name}</h4>
                <p>{age} years</p>
              </div>
              <Button
                className="delete-btn-person"
                type="button"
                onClickPrp={() => handleClick(id)}
              >
                Del
              </Button>
            </li>
          );
        })}
      </ul>
      <Button className="clear-btn-all" type="button" onClickPrp={() => setListe([])}>
        Clear All
       </Button>
    </div>
  );
}

export default Main;
