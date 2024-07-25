"use client";
import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { useTexture, Html } from "@react-three/drei";
import { TextureLoader } from "three";

export default function Saturn(props) {
  const saturnRef = useRef();
  useFrame(({ clock }) => {
    saturnRef.current.position.x = Math.sin(clock.getElapsedTime() / 29.4) * 30;
    saturnRef.current.position.z = Math.cos(clock.getElapsedTime() / 29.4) * 30;
    saturnRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={saturnRef} recieveShadow={true} castShadow>
      <sphereGeometry args={[4, 30, 10]} />
      {/* <sphereGeometry args={[4.01, 30, 10]} /> */}
      <meshPhysicalMaterial color={"blue"} ior={2.3} />
      <meshStandardMaterial map={props.map} />
      <Html occlude position={[0, 5, 0]}>
        Saturn
      </Html>
    </mesh>
  );
}
