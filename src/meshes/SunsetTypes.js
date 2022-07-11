import React, {useState, useEffect} from "react";
import {Text, Html} from "@react-three/drei";
import OpenSans from "../fonts/OpenSans.ttf"
import enterIcon from "../icons/enter.svg"
import * as THREE from "three";


import url from "../video/sunsetTypes.mp4";

const general = `It's my last project. The main goal of the Sunset Types was to create toDoList and the calculator. You can control the screen with the mouse or with the finger gestures. The toDoList tool allows you to enter a task to be performed, mark status and delete it. The calculator tool allows you to perform basic math operations with the ability to display the result in the sky.`
const technologies = 'React 18, Redux (RTK), TypeScript, Styled Components, Three' 

const initialStyles = {
    fontSize: 0.13,
    color: "black",
    font: OpenSans,
  };

  const subTitle = {
      ...initialStyles,
      fontSize: 0.1,
      letterSpacing: 0.07,
  }

  const title = {
      ...initialStyles,
      fontSize: 0.21
  }

  const defaultText = {
      ...initialStyles,
      fontSize: 0.05,
      letterSpacing: 0.03,
      maxWidth: 0.9,
      textAlign: "justify"
  }

  const boldText = {
    fontFamily: "OpenSansBold",
    color: "black",
    fontSize: 0.04,
    maxWidth: 0.7,
    letterSpacing: 0.03,
  }

  const anchorStyles = {
    display: "inline-block",
    fontFamily: "OpenSans",
    marginLeft: "40px",
    fontSize: "35px",
    textDecoration: "none",
    lineHeight: "60px",
    color: "black",
    border: "1px solid black",
    borderRadius: "10px",
    width: "590px",
    height: "65px",
    textAlign: "center"
}

const enterIconStyle = {
    backgroundImage: `url(${enterIcon})`,
    backgroundSize: "contain",
    backgroundPosition: "center",
    display: "inline-block",
    fontSize: "0",
    width: "30px",
    height: "30px",
    transform: "translate(-40%, 11%)",
    backgroundRepeat: "no-repeat"
  }

export const SunsetTypes = () => {
    const [video] = useState(() => {
        const vid = document.createElement("video");
        vid.src = url;
        vid.crossOrigin = "Anonymous";
        vid.loop = true;
        vid.muted = true;
        return vid;
      });

      useEffect(() => video.play(), [video])

    return (
    <group position={[-3.36, 1.3, -7.8]} rotation={[0, Math.PI / 2, 0]}>
        <group position={[2, 0, 0]}>
            <group position={[0.1, 0, 0]}>
                <Text {...title} text={"SUNSET TYPES"} position={[0.008, 0.76, 0]}/>
            </group>

            <group position={[0.1, 0.47, 0]}>
                    <Text {...subTitle} text={"General"} position={[-0.31, 0.05, 0]}/>
                    <Text {...defaultText} text={general} position={[-0.01, -0.32, 0]}/>
                    <Text {...subTitle} text={"Technologies"} position={[-0.21, -0.7, 0]}/>
                    <Text {...boldText} text={technologies} position={[-0.1, -0.85, 0]}/>
            </group>

            <group position={[1.5, 0.05, 0]}>
                <mesh>
                    <planeGeometry args={[1.5, 1]} />
                    <meshStandardMaterial side={THREE.FrontSide}>
                    <videoTexture attach="map" args={[video]} />
                    </meshStandardMaterial>
                </mesh>

                <Html position={[-0.05, -0.6, 0]} scale={[0.1, 0.1, 0.1]} rotation={[0, 0, 0]} transform >
                    <a style={anchorStyles} href="https://sunsettypes.netlify.app/" target="_blank">
                    <i style={enterIconStyle}/>
                        Enter Sunset Types
                        </a>
                </Html>
            </group>


            

        </group>
    </group>);
  }