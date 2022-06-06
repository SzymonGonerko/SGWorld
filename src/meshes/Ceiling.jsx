import React from "react";
import { useBox } from "@react-three/cannon";

export const Ceiling = (props) => {
  const [cubeRef] = useBox(() => ({
    rotation: [-Math.PI / 2, 0, -Math.PI / 2],
    mass: 1,
    args: [21, 7.2, 0.2],
    material: {
      friction: 1,
    },
    ...props
  }));


  return (
    <mesh ref={cubeRef} castShadow layers={props.layers}>
      <boxBufferGeometry args={[21, 7.2, 0.2]} />
      <meshLambertMaterial />
      <meshStandardMaterial  roughness={0.8} color="white" />
    </mesh>
  );
};


// [21, 7.5, 0.2]