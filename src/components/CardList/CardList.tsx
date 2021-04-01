import React from 'react'
import './CardList.styles.css'


export const CardList = (props: any) => {
    return (
      <div className="CardList">
        {props.monsters.map((monster: any) => (
          <h1>{monster?.name}</h1>
        ))}
      </div>
    );
}
