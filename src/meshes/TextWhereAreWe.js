import {Text} from "@react-three/drei";
import OpenSans from "../fonts/OpenSans.ttf"

const textWhereAreWeInReality = "In a real sense, we are in my apartment in the center of Wroclaw. It's prototype containing real objects, including myself. I am an author of Paint and the model of myself. Other objects based on CC Attribution-ShareAlike license."
const textWhereAreWeInVirtual = "In a virtual sense, we are inside canvas. This is normal HTML tag for every web page. This is a unique marker because it allows you to create a 2D or 3D space that can be freely manipulated."
const textWhereAreWeContext = "In my previous project Vanilla-Date, I used 2D space. Now, I decided to go step forward and use the maximum potential of 3D space."

const initialStyles = {
    fontSize: 0.13,
    color: "black",
    font: OpenSans,
  };
  const title = {
      ...initialStyles,
      fontSize: 0.21
  }
  const verticalTitle = {
      ...initialStyles,
      fontSize: 0.3
  }
  const defaultText = {
      ...initialStyles,
      fontSize: 0.08,
      letterSpacing: 0.07,
  }



export const TextWhereAreWe = () => {

    return (
    <group position={[3.36, 1.5, 4.6]} rotation={[0, -Math.PI / 2, 0]}>
        <group position={[-1, -0.1, 0]}>
            <Text {...title} text={"WHERE"} position={[0, 0.7, 0]}/>
            <Text {...verticalTitle} text={"ARE"} position={[0.45, 0.59, 0]} rotation={[0, 0, -Math.PI /2]}/>
            <Text {...title} text={"WE?"} letterSpacing={0.48} position={[-0.001, 0.5, 0]}/>
        </group>

        <group position={[0, 0, 0]}>
        <Text {...defaultText} maxWidth={2.5} text={textWhereAreWeInReality} position={[0, 0, 0]}/>
        <Text {...defaultText} maxWidth={2.5} text={textWhereAreWeInVirtual} position={[0, -0.4, 0]}/>
        <Text {...defaultText} maxWidth={2.5} text={textWhereAreWeContext} position={[0, -0.75, 0]}/>
        </group>

    </group>);
  }