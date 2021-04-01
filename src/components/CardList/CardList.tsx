import React from 'react'
import './CardList.styles.css'


export const CardList = (props: any) => {
    return <div className="CardList">{ props?.children }</div>;
}
