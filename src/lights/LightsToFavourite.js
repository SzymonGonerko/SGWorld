import { Vector3 } from 'three'
import { useRef } from 'react'
import {useFrame} from '@react-three/fiber'
import {SpotLight} from '@react-three/drei'



const LightsToFavourite = ({ vec = new Vector3() }) => {
    const LightToFav = useRef()
    useFrame(() => {
      LightToFav.current.target.position.lerp(vec.set(-3, 1.35, -6.7), 0.1)
      LightToFav.current.target.updateMatrixWorld()

    })
    return (
    <group position={[0, 1.4, -1.8]}>
      <SpotLight ref={LightToFav} penumbra={0.5} distance={10} angle={0.22} attenuation={0} anglePower={0} intensity={0.7} />
    </group>)

  }

  export default LightsToFavourite