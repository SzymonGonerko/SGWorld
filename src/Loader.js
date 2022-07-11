import React, {useState, useEffect} from "react";
import { useProgress } from '@react-three/drei'
import injectSheet from "react-jss";

import earth from "./icons/earth.svg"
import bcg from "./screenShot/SGWorldBack.jpg"

const styles = {
  '@keyframes rotateEarth': {
    "0%": {transform: "translate(-12px, -10px) rotate(0deg)"},
    "100%": {transform: "translate(-12px, -10px) rotate(360deg)"},
},
  loaderContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundImage: `url(${bcg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    alignItems: "center",
    height: "100vh",
    width: "100vw",
    fontFamily: "OpenSans",
    fontSize: "5vh",
    letterSpacing: "2px",
  },
loader: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    height: "50%",
    backgroundColor: "#2F7FC4",
    opacity: "0.8",
    borderRadius: "2vh",
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
  const {progress} = useProgress()
  const [counter, setCounter] = useState(0)
  const [isFinish, setIsFinish] = useState(false)

  useEffect(() => {
if (progress === 100) {
  setCounter(prev => prev + 1)
}

if (counter >= 2) {
  setTimeout(() => {
    setIsFinish(true)
  }, 8000)
}

setTimeout(() => {
  setIsFinish(true)
}, 10000)

  }, [progress])

 
  return  (
    <>
    {!isFinish &&
      <div className={classes.loaderContainer}>
        <div className={classes.loader}>
          <i className={classes.earthIcon}/>
          <div>Loading...</div>
          <div style={{color: "white"}}>The only limit is Your imagination...</div>
          <div className={classes.stylesPercentage} >{Math.floor(progress)}%</div>
        </div>
      </div>
    }

    </>
  )
}

const Loader = injectSheet(styles)(Box)
export default Loader