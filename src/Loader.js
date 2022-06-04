import React, {useState, useEffect, Suspense} from "react";
import { useProgress } from '@react-three/drei'


const stylesLoader = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  fontFamily: "OpenSans",
  fontSize: "50px"
}

const stylesPercentage = {
  
}


export function Loader() {
  const {active, progress, total} = useProgress()
  const [counter, setCounter] = useState(0)

  useEffect(() => {
if (progress === 100) {
  setCounter(prev => prev + 1)
}
  }, [progress])

  console.log(counter)

 
  return  (
    <>
   
        <div style={stylesLoader}>

          <div>Creating World...</div>
          <div>{Math.floor(progress)}%</div>
          
          
          
        </div>
    

    </>
  )
}