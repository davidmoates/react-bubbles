import React, { useState, useEffect } from "react";
import axiosWithAuth from "../axiosWithAuth";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = props => {
  const [colorList, setColorList] = useState([]);

  useEffect(() => {
    localStorage.getItem('token') &&
    axiosWithAuth()
      .get('/colors')
      .then(res => {
        setColorList(res.data)
      })
      .catch(err => {
        console.error('BubblePage Error', err.message);
      })
  }, [])

  return (
    <>
      <ColorList props={props} colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
