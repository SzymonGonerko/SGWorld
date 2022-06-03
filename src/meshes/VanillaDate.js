import React, {useState} from "react";
import * as THREE from "three";

import {Text} from "@react-three/drei";
import OpenSans from "../fonts/OpenSans.ttf"

import url from "../video/VanillaDate.mp4";

const describeVanilla = "The mobile dating application, fully functional, written in the React library, styled with JSS and with the use of Material-UI. The project uses class objects and basic hooks(useState, useRef, useEffect, useClasses, useHistory). While writing the project, I learned how to use asynhronic functions ..."
const describeVanilla2 = "... and deal with the problem of server queries. App include a real-time Chat. The application is placed on a Google server (Firebase) with user authentication and backend support. Design inspired by the movie The 'Shape of Water' dir. Guillermo del Toro."

export const VanillaDate = () => {
  
    const [video] = useState(() => {
      const vid = document.createElement("video");
      vid.src = url;
      vid.crossOrigin = "Anonymous";
      vid.loop = true;
      vid.muted = true;
      vid.play();
      return vid;
    });

    const initialStyles = {
      fontSize: 0.13,
      color: "black",
      font: OpenSans,
    };
    const title = {
        ...initialStyles,
        fontSize: 0.21,
        letterSpacing: 0.03

    }
    const defaultText = {
        ...initialStyles,
        fontSize: 0.06,
        letterSpacing: 0.07,
        maxWidth: 0.6
    }

  
    return (
      <group position={[3.36, 1.2, -10.7]}>

      <Text {...title} text={"Vanilla Date"} position={[0, 0.67, 0]} rotation={[0, -Math.PI / 2, 0]}/>


        <group position={[0, -0.9, 0]} rotation={[0, -Math.PI / 2, 0]}>
        <Text {...defaultText} textAlign={"right"} text={describeVanilla} position={[-0.72, 0.9, 0]}/>
        <Text {...defaultText} text={describeVanilla2} position={[0.72, 0.9, 0]}/>
        </group>



        <group rotation={[0, -Math.PI / 2, 0]}>
          <mesh>
            <planeGeometry args={[0.47, 1]} />
            <meshStandardMaterial side={THREE.FrontSide}>
              <videoTexture attach="map" args={[video]} />
            </meshStandardMaterial>
          </mesh>
        </group>
      </group>
    );
  };