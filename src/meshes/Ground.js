
import { usePlane } from "@react-three/cannon"

export const Ground = (props) => {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }))
  return (
    <mesh ref={ref} receiveShadow>
      <planeGeometry args={[500, 500, 500]} />
      <meshStandardMaterial roughness={0} color="white" />
    </mesh>
  )
}
