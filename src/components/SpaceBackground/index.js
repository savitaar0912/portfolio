import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

export default function SpaceBackground() {
  return (
    <Canvas style={{ position: "fixed", top: 0, left: 0, zIndex: 1, filter: "invert()" }}>
      <Stars radius={110} depth={50} count={20000} factor={4} saturation={0} fade speed={1} />
      <ambientLight intensity={0.3} />
    </Canvas>
  );
}
