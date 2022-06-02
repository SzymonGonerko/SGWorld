import {Text} from "@react-three/drei";
import OpenSans from "../fonts/OpenSans.ttf"

const textWhoAmI = "I'm Szymon Gonerko. I am a master of administrative law. I worked for 3 years as an inspector for foreigners. Two years ago I visited awwwards.com with the world's best website designs. I was fascinated by them and decided to work towards to front end. I am currently a graduate of the IT CodersLab school and a beginning react developer. While working on my diploma application, I noticed how beautiful generative art based on manipulation of the canvas and class objects can be. I really love it. I would like to continue in this direction and gain knowledge at work on commercial projects."

export const TextWhereWhoAmI = () => {
    const initialStyles = {
      fontSize: 0.13,
      color: "black",
      font: OpenSans,
    };
    const title = {
        ...initialStyles,
        fontSize: 0.21
    }
    const defaultText = {
        ...initialStyles,
        fontSize: 0.08,
        letterSpacing: 0.07,
        maxWidth: 2
    }
    const verticalTitle = {
        ...initialStyles,
        fontSize: 0.3,
        letterSpacing: 0.09
    }

    return (
    <group position={[3.36, 1.4, 1]} rotation={[0, -Math.PI / 2, 0]}>
        <group position={[-0.83, -0.1, 0]}>
            <Text {...title} text={"WHO"} position={[0, 0.7, 0]}/>
            <Text {...verticalTitle} text={"AM"} position={[0.35, 0.59, 0]} rotation={[0, 0, -Math.PI /2]}/>
            <Text {...title} text={"I"} letterSpacing={0.2} position={[-0.0161, 0.52, 0]}/>
        </group>

        <group position={[0, -1, 0]}>
        <Text {...defaultText} text={textWhoAmI} position={[0, 0.7, 0]}/>
        </group>

    </group>);
  }