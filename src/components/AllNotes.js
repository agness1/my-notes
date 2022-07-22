import Note from "./Note"

import { Fragment, useState, useContext } from "react"
import ColorContext from "../store/selectColor-context"
const AllNotes = (props) => {

  const [button, setButton] = useState(false)
  
 const  colorCtx = useContext(ColorContext)
   
const notes = props.data


const buttonHandler = () => {

  setButton(true)
 
colorCtx.resetColor()
props.onButtonHandler({button: button})

}



 

const buttonCloseHandler = (id) => {

 
props.onDelete({id:id})
}




return (
<Fragment>
{notes.map((note) => (
   <Note onClose={buttonCloseHandler}
   key={note.id}
   
   id={note.id}
   title={note.title}
   text={note.text}
 /> ))}
 <button onClick={buttonHandler}>Add</button> 
</Fragment>
)

}









export  default AllNotes

