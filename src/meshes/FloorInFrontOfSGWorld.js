import React from "react";
import { useBox } from "@react-three/cannon";

export const FloorInFrontOfSGWorld = (props) => {
  const [cubeRef] = useBox(() => ({
    rotation: [-89.5, 0, 91.1],
    mass: 1000,
    args: [13, 3, 0.2],
    material: {
      friction: 1,
      restitution: 0
    },
    ...props
  }));


  return (
    <mesh ref={cubeRef} castShadow layers={props.layers}>
      <boxBufferGeometry args={[13, 3, 0.2]} />
      <meshLambertMaterial />
      <meshStandardMaterial  roughness={1} color="grey" />
    </mesh>
  );
};
