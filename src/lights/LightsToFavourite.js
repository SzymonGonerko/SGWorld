import { Vector3 } from 'three'
import { useRef } from 'react'
import {useFrame, useThree} from '@react-three/fiber'
import {SpotLight} from '@react-three/drei'



const LightsToFavourite = ({ vec = new Vector3() }) => {
    const LightToFav = useRef()
    useFrame(() => {
      LightToFav.current.target.position.lerp(vec.set(-3, 1.35, -8.8), 0.1)
      LightToFav.current.target.updateMatrixWorld()

    })
    return <group position={[0, 2.6, -4]}>
    <SpotLight position={[0, 0, 0]} ref={LightToFav} penumbra={0.5} distance={8} angle={0.25} attenuation={0.8} anglePower={2} intensity={0.7} />
    </group>

  }

  export default LightsToFavourite