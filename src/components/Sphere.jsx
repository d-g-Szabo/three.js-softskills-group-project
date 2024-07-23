"use client";
import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { useTexture } from "@react-three/drei";
import { TextureLoader } from "three";
export default function Sphere(props) {
  const sunRef = useRef();
  useFrame(() => {
    sunRef.current.rotation.y += 0.002;
  });
  return (
    <mesh {...props} ref={sunRef} recieveShadow={true} castShadow>
      <sphereGeometry />
      <meshStandardMaterial
        map={props.map}
        emissive={""}
        emissiveIntensity={5}
      />

      {/* <meshPhysicalMaterial color={"yellow"} /> */}
    </mesh>
  );
}
