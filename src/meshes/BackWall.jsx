import React from "react";
import { useBox } from "@react-three/cannon";

export const BackWall = (props) => {
  const [cubeRef] = useBox(() => ({
    rotation: [0, 0, 0],
    mass: 1000,
    args: [7, 3, 0.2],
    material: {
      friction: 1,
      restitution: 0
    },
    ...props
  }));


  return (
    <mesh ref={cubeRef} castShadow layers={props.layers}>
      <boxBufferGeometry args={[7, 3, 0.2]} />
      <meshLambertMaterial />
    </mesh>
  );
};