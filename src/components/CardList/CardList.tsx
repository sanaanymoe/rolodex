import React from 'react'
import './CardList.styles.css'
import { Card } from '../Card/Card'


export const CardList = (props: any) => {
    return (
      <div className="CardList">
        {props.monsters.map((monster: any) => (
          <Card monster={monster}/>
        ))}
      </div>
    );
}
