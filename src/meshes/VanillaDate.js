import React, {useState} from "react";
import * as THREE from "three";

import { Html } from "@react-three/drei";

import {Text} from "@react-three/drei";
import OpenSans from "../fonts/OpenSans.ttf"

import url from "../video/VanillaDate.mp4";
import enterIcon from "../icons/enter.svg"
import arrowIcon from "../icons/arrow.svg"
import pointerIcon from "../icons/pointer.svg"

const describeVanilla = "The mobile dating application, fully functional, written in the React library, styled with JSS and with the use of Material-UI. The project uses: 2D canvas, class objects and basic hooks (useState, useRef, useEffect, useClasses, useHistory). While writing the project, I learned how..."
const describeVanilla2 = "... to use asynhronic functions and deal with the problem of server queries. App include a real-time Chat. The application is placed on a Google server (Firebase) with user authentication and backend support. Design inspired by the movie The 'Shape of Water' dir. Guillermo del Toro."


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

    const anchorStyles = {
      textDecoration: "none",
      border: "1px solid black",
      borderRadius: "10px",
      padding: "10px",
      fontFamily: "OpenSans",
      backgroundColor: "transparent",
      boxShadow: "0px 0px 24px 0px rgba(137, 28, 129, 1)",
      color: "black",
      font: "arial",
      transform: "translate(15%, 14%)",
    }
    const enterIconStyle = {
      backgroundImage: `url(${enterIcon})`,
      backgroundSize: "contain",
      backgroundPosition: "center",
      display: "inline-block",
      fontSize: "0",
      width: "15px",
      height: "15px",
      transform: "translate(15%, 11%)",
      backgroundRepeat: "no-repeat"
    }
    const arrowIconStyle = {
      ...enterIconStyle,
      backgroundImage: `url(${arrowIcon})`,
      transform: "translate(15%, 11%) rotate(50deg)",
      marginRight: "4px"
    }

    const pointerIconStyle = {
      ...enterIconStyle,
      backgroundImage: `url(${pointerIcon})`,
      marginRight: "4px"
      
    }

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
    const firstInstruction = {
      ...initialStyles,
      fontSize: 0.04,
      letterSpacing: 0.01,
      lineHeight: 1, 
      maxWidth: 0.5,
      textAlign: "left"
  }


  
    return (
      <group position={[3.36, 1.1, -11]}>

      <Text {...title} text={"Vanilla Date"} position={[0, 1, 0]} rotation={[0, -Math.PI / 2, 0]}/>

      <group position={[0, -0.17, 0]} rotation={[0, -Math.PI / 2, 0]}>
        <Text {...firstInstruction} text={"Press button 'ESC' (escape on your keyboard), to get access of your mouse..."} position={[-0.3, 0.95, 0]}/>

        <Html position={[0.4, 0.9, 0]} scale={[0.1,0.1,0.1]} rotation={[0, 0, 0]} transform >
            <i style={arrowIconStyle}/>
            <i style={pointerIconStyle}/>
            <p style={{display: "inline-block", fontFamily: "OpenSans"}}>Click the button</p> 
        </Html>

        <Html position={[0, 0.8, 0]} scale={[0.12,0.1,0.1]} rotation={[0, 0, 0]} transform >
          <a style={anchorStyles} href="https://vanilla-date.netlify.app/" target="_blank">
            <p style={{display: "inline-block", transform: "translate(-2%, -3%)"}}>Enter Vanilla-Date</p> 
            <i style={enterIconStyle}/>
          </a>
        </Html>
        </group>


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