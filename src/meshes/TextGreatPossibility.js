import React, {useState} from "react";
import {Text} from "@react-three/drei";
import OpenSans from "../fonts/OpenSans.ttf"
import { Html } from "@react-three/drei";

const textWhatCanIDoo = "Try to imagine that together we are building large airports, gardens, people and their stories ... we have such an opportunity ! Maybe you're thinking meh ... we can't connect our webside with this techologies. Every application wrote on React has such a possibility! In my opinion react and canvas look like great lovers. In addition, in the middle of the canvas you can create normal HTML tags like <a/>, <div /> <p /> and many more... rotate, style them...whatever you want... We have access to all hook's and conditional rendering... just KISS and one example... press ESC (escape on your keyboard) and click the button…"

export const TextGreatPossibility = () => {
const [isClicked, setIsClicked] = useState(false)


    const initialStyles = {
      fontSize: 0.13,
      color: "black",
      font: OpenSans,
    };
    const firstTitle = {
        ...initialStyles,
        fontSize: 0.19,
        letterSpacing: 0.1,
    }
    const buttonsStyle = {
        display: "block",
        backgroundColor: "#27242575",
        overflow: "hidden",
        border: "none"
    }
    const secTitle = {
        ...initialStyles,
        fontSize: 0.19,
        letterSpacing: 0.1,
    }
    const defaultText = {
        ...initialStyles,
        fontSize: 0.08,
        maxWidth: 2.3,
        letterSpacing: 0.01,
    }
    const newText = {
        ...initialStyles,
        fontSize: 0.08,
        maxWidth: 2.3,
        letterSpacing: 0.01,
        color: "rgba(160, 160, 224)"
    }

    return (
    <group position={[-3.36, 1.2, 2.4]} rotation={[0, Math.PI / 2, 0]}>
        <group position={[-0.49, 0.1, 0]}>
            <Text {...firstTitle} text={"{REACT && CANVAS}"} position={[0, 0.77, 0]}/>
            <Text {...secTitle} text={"GREAT POSSIBILITY"} position={[-0.07, 0.55, 0]}/>
        </group>

        <group position={[0, -0.7, 0]}>
        <Text {...defaultText} text={textWhatCanIDoo} position={[0, 0.7, 0]}/>
        {isClicked && <Text {...newText} text={"Are you see?"} position={[0.1, 0.2, 0]}/>}
        </group>

        <Html position={[0.8, -0.6, 0]} scale={[0.1,0.1,0.1]} rotation={[0, 0, 0]} transform >
          <button onClick={() => setIsClicked(prev => !prev)} style={buttonsStyle}>
            Click Me, please
          </button>
        </Html>

    </group>);
  }