import React from "react";
import { useBox } from "@react-three/cannon";

export const Glass = (props) => {
  const [cubeRef] = useBox(() => ({
    rotation: [0, 0, 0],
    mass: 1000,
    args: [1.16, 1.9, 0.01],
    material: {
      friction: 1,
      restitution: 0
    },
    ...props
  }));


  return (
    <mesh ref={cubeRef} castShadow layers={props.layers}>
      <boxBufferGeometry args={[1.16, 1.9, 0.01]} />
      <meshStandardMaterial transparent opacity={0.3} roughness={0} color="white" />
    </mesh>
  );
};