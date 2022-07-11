import {Html, Text} from "@react-three/drei";
import OpenSans from "../fonts/OpenSans.ttf"


export const TextSkills = () => {
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
        fontSize: 0.1,
        letterSpacing: 0.07,
    }

    return (<>
    <group position={[3.36, 1.3, -8]} rotation={[0, -Math.PI / 2, 0]}>

        <group position={[3, 0, 0]}>
            <Text {...initialStyles} text={"TECHNOLOGIES"} position={[0, 0.7, 0]}/>
            <Text {...defaultText} text={"- JAVASCRIPT"} position={[-0.05, 0.54, 0]}/>
            <Text {...defaultText} text={"- TYPESCRIPT"} position={[-0.05, 0.4, 0]}/>
            <Text {...defaultText} text={"- HTML5"}  position={[-0.109, 0.26, 0]}  />
            <Text {...defaultText} text={"- SCSS"} position={[-0.09, 0.12 , 0]}/>
            <Text {...defaultText} text={"- CSS"} position={[0, 0, 0]} />
            
        </group>
        <group position={[1.7, 0, 0]}>
            <Text {...title} text={"MY SKILLS"} position={[0, 0.7, 0]}/>
        </group>
        <group position={[-0.5, -0.15, 0]}>
            <Text {...initialStyles} text={"TOOLS"}  position={[0.3, 0.7, 0]}/>
            <Text {...defaultText} text={"- REACT"} position={[-0.09, 0.54, 0]}/>
            <Text {...defaultText} text={"- REACT/THREE/DREI (current project)"} position={[ 0.35, 0.4, 0]}/>
            <Text {...defaultText} text={"- REACT/THREE/FIBER (current project)"} position={[0.3, 0.26, 0]}/>
            <Text {...defaultText} text={"- REACT/THREE/CANNON (current project)"} position={[0.27, 0.12, 0]}/>
            <Text {...defaultText} text={"- REDUX"} position={[-0.35, -0.02, 0]}/>
            <Text {...defaultText} text={"- MATERIAL UI"} position={[-0.2, -0.15, 0]}/>
            <Text {...defaultText} text={"- NEXT"} position={[-0.25, -0.28, 0]}/>
            <Text {...defaultText} text={"- NODE (in progress)"} position={[0.08, -0.42, 0]}/>
            <Text {...defaultText} text={"- FIREBASE"} position={[-0.06, -0.56, 0]}/>
            <Text {...defaultText} text={"- BLENDER (current project)"} position={[0.31, -0.70, 0]}/>
            <Text {...defaultText} text={"- GIT"} position={[0, -0.85, 0]}/>
        </group>
        <group position={[1.4, -0.9, 0]}>
            <Text {...initialStyles} text={"IDE"}  position={[-0.09, 0.7, 0]}/>
            <Text {...defaultText} text={"- VISUAL STUDIO CODE (current editor)"} position={[0.6, 0.54, 0]}/>
            <Text {...defaultText} text={"- WEBSTORM"} position={[ 0.097, 0.4, 0]}/>
            <Text {...defaultText} text={"- WEBPACK"} position={[ 0.06, 0.26, 0]}/>
            <Text {...defaultText} text={"- GULP"} position={[-0.017, 0.12, 0]}/>
        </group>
    </group></>);
  }