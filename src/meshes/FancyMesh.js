import React from "react";

import {
  MeshDistortMaterial,
} from "@react-three/drei";

export const FancyMesh = ({color}) => {
  return (
        <MeshDistortMaterial
          color={color}
          emissive
          attach="material"
          distort={0.7}
          speed={2}
          roughness={0}
        />
  );
}
