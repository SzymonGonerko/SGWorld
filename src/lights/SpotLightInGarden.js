import { Vector3 } from 'three'
import { useRef } from 'react'
import {useFrame} from '@react-three/fiber'
import {SpotLight} from '@react-three/drei'



const SpotLightInGarden = ({ vec = new Vector3(),objectPosition, color , lightPos}) => {
    const light = useRef()
    useFrame(() => {
      light.current.target.position.lerp(vec.set(objectPosition[0], objectPosition[1], objectPosition[2]), 0.1)
      light.current.target.updateMatrixWorld()
    })
    return <SpotLight position={[lightPos[0], lightPos[1], lightPos[2]]} color={color}   ref={light} penumbra={1} distance={15} angle={2} attenuation={0} anglePower={2} intensity={1.5} />
  }

  export default SpotLightInGarden
