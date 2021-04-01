import React from "react"
import './Card.styles.css'


export const Card = (props: any) => {
  return (
    <div className="CardContainer">
      <h1>{props?.monster.name}</h1>
    </div>
  );
};
