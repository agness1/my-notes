import { useState } from "react"
import React from "react";


const ColorContext = React.createContext({
    stateRed: false ,
    stateWhite: false,
    stateYellow: true,
    stateBlue: false,
    redColor: () => {},
    whiteColor: () => {},
    yellowColor: () => {},
    blueColor: () => {},
    resetColor: () => {}

})


export const ColorProvider = (props) => {
const [isRed, setRed] = useState(false);
const [ isWhite, setWhite] = useState(false)
const [isYellow, setYellow] = useState(false)
const [isBlue, setBlue] = useState(false)


const red = () => {
 setRed(true)
 console.log('red')
  
}
const white = () => {
setWhite(true)
console.log('white')
}
const yellow = () => {
setYellow(true)
console.log('yellow')
}
const blue = () => {
  setBlue(true)
}


const reset = () => {

setRed(false);
setBlue(false);
setWhite(false)
setYellow(false)

}


return (
    <ColorContext.Provider
      value={{
      stateRed: isRed,
      stateWhite: isWhite,
      stateYellow: isYellow,
      stateBlue: isBlue,
      redColor: red,
      whiteColor: white,
      yellowColor: yellow,
      blueColor: blue,
      resetColor: reset
      }}
    >
      {props.children}
    </ColorContext.Provider>
  );



}


export default ColorContext