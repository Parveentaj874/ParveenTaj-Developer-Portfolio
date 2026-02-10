import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Center } from "@react-three/drei";
import { Suspense } from "react";

function LaptopModel() {
  const { scene } = useGLTF("/laptop.glb");

  return (
    <Center>
      <primitive
        object={scene}
        scale={0.6}
        rotation={[0, Math.PI / 4, 0]}
      />
    </Center>
  );
}

export default function Canvas3D() {
  return (
    <div className="w-full h-[320px]">
      <Canvas camera={{ position: [0, 1.5, 4], fov: 45 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />

        <Suspense fallback={null}>
          <LaptopModel />
        </Suspense>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={1}
        />
      </Canvas>
    </div>
  );
}
