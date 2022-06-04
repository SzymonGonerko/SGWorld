import React from "react";
import { useBox } from "@react-three/cannon";

export const FrontWall = (props) => {
  const [cubeRef] = useBox(() => ({
    rotation: [0, 0, 0],
    mass: 1000,
    args: [3.5, 3, 0.01],
    material: {
      friction: 1,
      restitution: 0
    },
    ...props
  }));


  return (
    <mesh ref={cubeRef} castShadow layers={props.layers}>
      <boxBufferGeometry args={[3.5, 3, 0.01]} />
      <meshLambertMaterial transparent opacity={0.3} color={"#e0e0e0"} />
    </mesh>
  );
};