import React, {useState, useRef} from "react";
import {useFrame} from '@react-three/fiber'
import { Html } from "@react-three/drei";



export const TextSGWorld = () => {
    const initialStyles = {
      fontFamily: "Ava",
      color: "red",
      fontSize: "1000px",
    };


    return (<>

        <Html position={[3, 15, 0]} scale={[0.1,0.1,0.1]} rotation={[Math.PI, 0, Math.PI / 1]} transform >
          <div style={initialStyles}>
            SG
          </div>
        </Html>

        <Html position={[-3, 15, 0]} scale={[0.1,0.1,0.1]} rotation={[Math.PI, 0, Math.PI / 1]} transform >
          <div style={initialStyles}>
            World
          </div>
        </Html>
        
        </>
    );
  }