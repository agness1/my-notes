
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import classes from "./Notes.module.css"
import { useContext } from 'react'
import '../index.css'
import ColorContext from '../store/selectColor-context'


const Note = (props) => {
    
  const  colorCtx = useContext(ColorContext)

const buttonCloseHandler = (id) => {

props.onClose({id})

}

console.log(colorCtx.stateRed)

const color =  (colorCtx.stateRed && 'red' )|| (colorCtx.stateYellow && 'yellow')  || ( colorCtx.stateBlue && 'blue') || (colorCtx.stateWhite && 'white')
 

return (
    <div  className={classes.note}  style={{backgroundColor: color}} >
            <h4>{props.title}</h4>
            <p>{props.text}</p>
            < FontAwesomeIcon onClick={buttonCloseHandler.bind(this, props.id)} icon={faXmark} className={classes.faSolid} />
        
    </div>
)


}



export default Note