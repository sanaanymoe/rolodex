import React, { useEffect, useState } from "react";

import './SearchBox.styles.css'
interface Props {
    placeHolder: string,
    handleChange : (e: any) => void
}

export const SearchBox = (props: Props) => {
  
    return (
      <input
        className="search"
        type="search"
        placeholder={props.placeHolder}
        onChange={props.handleChange}
      />
    );
    
}