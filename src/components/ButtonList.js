import React from 'react'
import Button from './Button'
import { useSelector } from "react-redux";

const list = ["All","JavaScript","Music","Sports","News","Comedy","Live","movies","webseries"]

const ButtonList = () => {
  const theme = useSelector((store) => store.theme.isDarkTheme);
  return (
    <div className="flex">
      {/* <Button name="All"/> */}

      {
        list.map((listdata,index) => (
          <Button  key={index} name={listdata} />
        ))
      }
    </div>
  )
}

export default ButtonList
