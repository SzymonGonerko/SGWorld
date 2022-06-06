import React from "react";
import { useBox } from "@react-three/cannon";

export const BridgeToSGWorld = (props) => {
  const [cubeRef] = useBox(() => ({
    rotation: [-90.4, 0, 89.57],
    mass: 1000,
    args: [18, 2, 0.2],
    material: {
      friction: 1,
      restitution: 0
    },
    ...props
  }));


  return (
    <mesh ref={cubeRef} castShadow layers={props.layers}>
      <boxBufferGeometry args={[17.3, 2, 0.2]} />
      <meshLambertMaterial />
      <meshStandardMaterial  roughness={0.8} color="white" />
    </mesh>
  );
};
