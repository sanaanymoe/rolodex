import React from "react"
import './Card.styles.css'


export const Card = (props: any) => {
  return (
    <div className="CardContainer">
      <img src={`https://robohash.org/${props.monster.id}?set=set5&size=180x180`}></img>
      <h2>{props?.monster.name}</h2>
      <p>{ props?.monster.email }</p>
    </div>
  );
};
