import {Text} from "@react-three/drei";
import OpenSans from "../fonts/OpenSans.ttf"

const textWhatCanIDoo = "I have all the necessary knowledge that a junior fronted developer should have. In addition, I can create 3D objects with a blender such as logos, images, people and then implement them on your website. For this project, I decided to create a fullscreen canvas. It can also be one small element with one thing. How do you think your client will be impressed by being able to manipulate a 3D object on your website?"

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
      letterSpacing: 0.03,
      maxWidth: 2,
      letterSpacing: 0.07,
  }
  const verticalTitle = {
      ...initialStyles,
      fontSize: 0.28,
      letterSpacing: 0.19
  }



export const TextWhatCanIDo = () => {

    return (
    <group position={[3.36, 1.4, -2.3]} rotation={[0, -Math.PI / 2, 0]}>
        <group position={[0, -0.1, 0]}>
            <Text {...title} text={"WHAT"} position={[-0.53, 0.77, 0]}/>
            <Text {...verticalTitle} text={"CAN"} position={[-0.9, 0.615, 0]} rotation={[0, 0, -Math.PI /2]}/>
            <Text {...title} text={"I DO FOR YOUR CLIENT"} position={[0.04, 0.47, 0]}/>
        </group>

        <group position={[0, -0.9, 0]}>
        <Text {...defaultText} text={textWhatCanIDoo} position={[0, 0.7, 0]}/>
        </group>

    </group>);
  }