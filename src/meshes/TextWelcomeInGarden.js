import React, {useState, useRef} from "react";
import {useFrame} from '@react-three/fiber'
import { Html } from "@react-three/drei";
import OpenSans from "../fonts/OpenSans.ttf"

import {Text} from "@react-three/drei";



export const TextWelcomeInGarden = () => {
    const welcome = {
        font: OpenSans,
        color: "violet"
      };


    return (<>
        <group position={[3, 1, -19]}>
            <Text {...welcome} text={"Welcome outside..."} rotation={[0, -Math.PI / 2, 0]} position={[0, 0, 0]}/>
        </group>


        </>
    );
  }