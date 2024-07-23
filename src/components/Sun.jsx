"use client";
import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { useTexture } from "@react-three/drei";
import { TextureLoader } from "three";
export default function Sun(props) {
  const sunRef = useRef();
  useFrame(() => {
    sunRef.current.rotation.y += 0.002;
  });
  return (
    <mesh {...props} ref={sunRef}>
      <pointLight castShadow power={10000} />
      <sphereGeometry />

      <meshStandardMaterial
        map={props.map}
        emissive={"red"}
        emissiveIntensity={2}
      />

      {/* <meshPhysicalMaterial color={"yellow"} /> */}
    </mesh>
  );
}
