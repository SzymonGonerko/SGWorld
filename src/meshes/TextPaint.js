import React, {useState} from "react";
import {Text} from "@react-three/drei";
import OpenSans from "../fonts/OpenSans.ttf"


const textAuthor = "Vasily Kandinsky"
const textTitle = '"Small Pleasures"'
const textData = "June 1913"
const textMedium = "Oil on canvas"

export const TextPaint = () => {
    const initialStyles = {
      fontSize: 0.13,
      color: "black",
      font: OpenSans,
    };
    const defaultText = {
        ...initialStyles,
        fontSize: 0.04,
        maxWidth: 0.5,
        letterSpacing: 0.01,
    }

    return (
    <group position={[-3.36, 1.1, -3]} rotation={[0, Math.PI / 2, 0]}>
        <group position={[2.05, 0, 0]}>
            <Text {...defaultText} text={textAuthor} position={[0, 0.2, 0]}/>
            <Text {...defaultText} text={textTitle} position={[0, 0.15, 0]}/>
            <Text {...defaultText} text={textData} position={[-0.04, 0.1, 0]}/>
            <Text {...defaultText} text={textMedium} position={[-0.023, 0.05, 0]}/>
        </group>
    </group>);
  }