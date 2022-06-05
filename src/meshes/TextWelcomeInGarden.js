import React, {useState, useRef} from "react";
import { Html } from "@react-three/drei";
import OpenSans from "../fonts/OpenSans.ttf"
import pointerIcon from "../icons/pointer.svg"

import {Text} from "@react-three/drei";

const inspiration = "Three years ago I was at a great event in Wrocław. I remember it to this day. Unfortunately I have no pics to show You... there were too many colors. While I wrote code I based on my memories. Please, check It ..."



export const TextWelcomeInGarden = () => {
    const welcome = {
        font: OpenSans,
        color: "violet",
        maxWidth: 1.4
      };

      const initStylepointerIcon = {
        width: "30px",
        height: "30px",
        backgroundSize: "contain",
        backgroundPosition: "center",
        display: "inline-block",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${pointerIcon})`,
        marginRight: "10px",
        transform: "translate(0, 2px)"
    }

    const anchorStyles = {
      display: "inline-block",
      fontFamily: "OpenSans",
      marginRight: "40px",
      fontSize: "35px",
      textDecoration: "none",
      lineHeight: "60px",
      color: "violet",
      border: "1px solid violet",
      borderRadius: "10px",
      width: "350px",
      height: "65px",
      textAlign: "center"
  }


    return (<>
        <group position={[3, 1.3, -21.6]}>
            <Text {...welcome} text={inspiration} rotation={[0, -Math.PI / 2, 0]} position={[0, 0, 0]}/>
        </group>

        <Html position={[3, 0.8, -21]} scale={[0.1,0.1,0.1]} rotation={[0, -Math.PI / 2, 0]}  transform >
            <a style={anchorStyles} href="https://pik.wroclaw.pl/zaczarowany-ogrod-we-wroclawiu/" target="_blank">
                Click LightGarden in Wroclaw
            </a>
        </Html>


        </>
    );
  }