import {Text} from "@react-three/drei";
import OpenSans from "../fonts/OpenSans.ttf"


export const TextPhoto = () => {
    const initialStyles = {
      fontSize: 0.1,
      color: "black",
      font: OpenSans,
    };
    const title = {
        ...initialStyles,
        fontSize: 0.05
    }


    return (
    <group position={[-0.55, 0.89, 6.89]} rotation={[Math.PI, 0, Math.PI]}>
        <Text {...title} text={' on the right hand - kalimba, on the table laptop and "The Book Thief"'} position={[0, 0.7, 0]}/>
    </group>);
  }