import React, {useState, useRef} from "react";
import { Html } from "@react-three/drei";
import OpenSans from "../fonts/OpenSans.ttf"
import pointerIcon from "../icons/pointer.svg"

import {Text} from "@react-three/drei";

const inspiration = "Three years ago I was at LightGarden event in Wrocław. I remember it to this day. There were a lot of illuminated trees. While I wrote code I try reflect one of them. More information at the link below."



export const TextLightGarden = () => {
    const welcome = {
        font: OpenSans,
        color: "violet",
        maxWidth: 1.5
      };

      const titleWelcome = {
          ...welcome,
          fontSize: 0.2
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
        <Text {...titleWelcome} text={"Light Garden"} rotation={[0, -Math.PI / 2, 0]} position={[0, 0.6, -0.4]}/>
        <Text {...welcome} text={inspiration} rotation={[0, -Math.PI / 2, 0]} position={[0, 0.05, 0]}/>
        </group>

        <Html position={[3, 0.8, -21]} scale={[0.1,0.1,0.1]} rotation={[0, -Math.PI / 2, 0]}  transform >
            <a style={anchorStyles} href="https://gazetawroclawska.pl/wroclaw-zaczarowany-ogrod-w-parku-staromiejskim-juz-otwarty-dla-zwiedzajacych-zdjecia/ar/c1-14655943" target="_blank">
                Click LightGarden in Wroclaw
            </a>
        </Html>


        </>
    );
  }