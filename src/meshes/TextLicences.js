import {Text} from "@react-three/drei";
import OpenSans from "../fonts/OpenSans.ttf"
import { Html } from "@react-three/drei"

const textWhereAreWeInReality = "In a real sense, we are in my apartment in the center of Wroclaw. It's a prototype containing real objects, including myself. I wrote some of it, such as Book.js, and Paint.js. I am an author of the model of myself (WhiteBlackMe.js). Some are by other authors based on CC Attribution-ShareAlike license."
const textWhereAreWeInVirtual = "In a virtual sense, we are inside <canvas/>. This is a fully semantic inline-block HTML tag for any web page (you can check it in inspector dev tools). This is a unique marker because it allows you to create a 2D or 3D space that can be freely manipulated."
const textWhereAreWeContext = "In my previous project Vanilla-Date, I used 2D space. Now, I decided to go a step forward and use the maximum potential of 3D space."

export const TextLicences = () => {
    const initialStyles = {
      fontSize: 0.13,
      color: "black",
      font: OpenSans,
    };
    const title = {
        ...initialStyles,
        fontSize: 0.1
    }

    const liStyle = {
        fontSize: "17px",
        fontFamily: "OpenSans",
    }

    return (
    <group position={[1.5, 1.5, 6.89]} rotation={[Math.PI, 0, Math.PI / 1]}>
        <group position={[-1.21, -0.45, 0]}>
            <Text {...title} text={"LICENCES"} position={[0, 0.7, 0]}/>
        </group>

        <Html position={[-0.55, 0.07, 0]} scale={[0.1,0.1,0.1]} rotation={[0, 0, 0]} transform >
            <ul>
                <li style={liStyle}>
                    File Stereo.js uses Stereo.glb - no modyficated -  base on CC BY-SA 4.0, object available at
                    <a target="_blank" href="https://sketchfab.com/3d-models/mini-stereo-dfed148a474945298d4046eda5d6309c">link</a>
                </li>

                <li style={liStyle}>
                    File FrontWall.js uses FrontWall.glb - modyficated -  base on CC BY 4.0, object available at
                    <a target="_blank" href="https://sketchfab.com/3d-models/residential-window-ae11104237314463a61251fd46ded4b4">link</a>
                </li>
                <li style={liStyle}>
                    File Tree.js uses Tree.glb - no modyficated -  base on CC BY 4.0, object available at
                    <a target="_blank" href="https://sketchfab.com/3d-models/jungle-tree-46f83ec5f6c04abf9d509c1070f67d1e">link</a>
                </li>
                <li style={liStyle}>
                    Music "FKJ - Just Piano (In partnership with Calm)" - no information about copyright from the author -  available at
                    <a target="_blank" href="https://www.youtube.com/watch?v=AmmFD2OIs_k">link</a>
                </li>
            </ul>
        </Html>



{/* 
        <group position={[0, 0, 0]}>
        <Text {...defaultText} maxWidth={2.5} text={textWhereAreWeInReality} position={[0, 0, 0]}/>
        <Text {...defaultText} maxWidth={2.5} text={textWhereAreWeInVirtual} position={[0, -0.5, 0]}/>
        <Text {...defaultText} maxWidth={2.5} text={textWhereAreWeContext} position={[0, -0.9, 0]}/>
        </group> */}

    </group>);
  }