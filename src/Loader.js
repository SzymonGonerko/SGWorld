import React, {useState, useEffect, Suspense} from "react";
import { useProgress } from '@react-three/drei'
import injectSheet from "react-jss";

import earth from "./icons/earth.svg"

const styles = {
  '@keyframes rotateEarth': {
    "0%": {transform: "translate(-12px, -10px) rotate(0deg)"},
    "100%": {transform: "translate(-12px, -10px) rotate(360deg)"},
},
  stylesLoader: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    fontFamily: "OpenSans",
    fontSize: "50px",
    letterSpacing: "2px",
  },
 stylesPercentage: {
  transform: "translate(-5px, 0)",
 },
 earthIcon: {
  backgroundImage: `url(${earth})`,
  backgroundSize: "contain",
  backgroundPosition: "center",
  display: "block",
  fontSize: "0",
  width: "100px",
  height: "100px",
  backgroundRepeat: "no-repeat",
  transform: "translate(-12px, -10px)",
  animation: "$rotateEarth 0.7s infinite linear",
 }

}


const Box = ({classes}) => {
  const {active, progress, item, loaded, total} = useProgress()
  const [counter, setCounter] = useState(0)
  const [isFinish, setIsFinish] = useState(false)

  useEffect(() => {
if (progress === 100) {
  setCounter(prev => prev + 1)
}

if (counter >= 2) {
  
  setTimeout(() => {
    setIsFinish(true)
  }, 4500)



}
  }, [progress])

 
  return  (
    <>
    {!isFinish &&
                  <div className={classes.stylesLoader}>
                  <i className={classes.earthIcon}/>
                  <div>Creating World...for You</div>
                  <div>Just a second, please</div>
                  <div className={classes.stylesPercentage} >{Math.floor(progress)}%</div>
            </div>
    }

    </>
  )
}

const Loader = injectSheet(styles)(Box)
export default Loader