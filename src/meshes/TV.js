import React, {useState} from "react";
import * as THREE from "three";

import url from "../video/VanillaDate.mp4";


export const TV = () => {
  
    const [video] = useState(() => {
      const vid = document.createElement("video");
      vid.src = url;
      vid.crossOrigin = "Anonymous";
      vid.loop = true;
      vid.muted = true;
      vid.play();
      return vid;
    });
  
    return (
      <group rotation={[0, 0, 0]}>
        <mesh rotation={[0, -Math.PI / 2, 0]} position={[3.36, 1.1, -10.5]}>
          <planeGeometry args={[0.49, 1]} />
          <meshStandardMaterial side={THREE.FrontSide}>
            <videoTexture attach="map" args={[video]} />
          </meshStandardMaterial>
        </mesh>
      </group>
    );
  };