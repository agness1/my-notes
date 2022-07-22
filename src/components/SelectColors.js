import classes from './FormNote.module.css';
import ColorContext from '../store/selectColor-context';
import { useContext } from 'react';

const SelectColors = () => {

const colorCtx = useContext(ColorContext)

//console.log(colorCtx.isRed)




    return (
    <div className={classes.selectColor}>
                     <div onClick={colorCtx.redColor}  className={classes.red}></div>
                     <div onClick={colorCtx.whiteColor} className={classes.white}></div>
                     <div onClick={colorCtx.yellowColor} className={classes.yellow}></div>
                     <div onClick={colorCtx.blueColor} className={classes.blue}></div>
                  </div>
)
}









export default SelectColors