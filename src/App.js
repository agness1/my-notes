import { Fragment, useState } from "react";
import NoteForm from "./components/NoteForm";
import AllNotes from "./components/AllNotes";
import { ColorProvider } from "./store/selectColor-context";



function App() {

  const [submit, isSubmit] = useState(true)
  const [notes, setNotes] = useState([])
  
 


const dataHandler = ( data ) => {



  setNotes((prevNotes) =>  {
  return [data, ...prevNotes
  ]

  
})


 
}

const idHandler = (idk) => {

setNotes(prevNotes => prevNotes.filter(note => note.id !== idk.id.id))

}



const formSubmitHandler  = (data) => { /// tutaj trzeba połączyć razem z btnHandler

const isSended = data.send

if(isSended) {
  isSubmit(true)
} else {
  isSubmit(false)
}


}

const btnHandler = (data) => {


  const btnClick = data

  if(btnClick) {
    isSubmit(true)
  } else {
    isSubmit(false)
  }
}



  return (
  <Fragment>
   <ColorProvider>
     { submit && <NoteForm onData = {dataHandler} onFormSubmit={formSubmitHandler}/>}
     { !submit && <AllNotes data={notes} onButtonHandler={btnHandler} onDelete={idHandler}/>}
   </ColorProvider>
    
  </Fragment>
  );

  }

export default App;
