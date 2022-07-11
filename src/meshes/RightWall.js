import React from "react";
import { useBox } from "@react-three/cannon";

export const RightWall = (props) => {
  const [cubeRef] = useBox(() => ({
    rotation: [0, -Math.PI / 2, 0],
    mass: 1000,
    args: [21, 3, 0.2],
    material: {
      friction: 1,
      restitution: 0
    },
    ...props
  }));


  return (
    <mesh ref={cubeRef} castShadow layers={props.layers}>
      <boxBufferGeometry args={[21, 3, 0.2]} />
      <meshLambertMaterial />
      <meshStandardMaterial  roughness={0.8} color="white" />
    </mesh>
  );
};