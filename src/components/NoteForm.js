import classes from './FormNote.module.css';
import React, { useRef, useState } from 'react' 
import SelectColors from './SelectColors';


const NoteForm = (props) => {


const [send, isSended] = useState(false)


const refTitle = useRef();
const refNoteText = useRef()

const submitHandler = (e) => {
 
e.preventDefault()
isSended(true)

const titleText = refTitle.current.value
const noteText = refNoteText.current.value




props.onData({title: titleText, text: noteText, id: Math.random().toString()})

props.onFormSubmit({send: send})


}


   
    return (
          
          <section className={classes.container}>
            <div className={classes.addNoteTitle}><h2>Add Note</h2></div>
              <form action="" onSubmit={submitHandler}>
                  <label >Title</label>
                  <input type="text" maxLength='22' required ref={refTitle} />
                
                  <label >Text</label>
                  <textarea name="" id="text-area" cols="30" rows="5" required maxLength='117' className={classes.textArea} ref={refNoteText} ></textarea>
                  <label htmlFor="select">Select color</label>
                  <SelectColors/>
                  <input type="submit" className={classes.submit} value="Add"/>
              </form>
          </section>
      
    )
}







export default NoteForm