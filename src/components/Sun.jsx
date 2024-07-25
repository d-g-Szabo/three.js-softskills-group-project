"use client";
import { useFrame, useLoader, extend } from "@react-three/fiber";
import { useRef } from "react";
import { useTexture } from "@react-three/drei";
import {
  TextureLoader,
  DirectionalLightHelper,
  PointLightHelper,
  Object3D,
} from "three";
import {
  Lensflare,
  LensflareElement,
} from "three/examples/jsm/objects/Lensflare";
import { useEffect } from "react";
extend({ Lensflare, LensflareElement });

export default function Sun(props) {
  const sunRef = useRef();
  const lightRef = useRef();

  useFrame(() => {
    if (sunRef.current) {
      sunRef.current.rotation.y += 0.002;
    }
  });

  // Load textures for the lens flare
  const textureFlare0 = useLoader(TextureLoader, "/textures/lensflare0.png");
  const textureFlare3 = useLoader(TextureLoader, "/textures/lensflare3.png");

  useEffect(() => {
    if (lightRef.current) {
      const lensflare = new Lensflare();
      lensflare.addElement(new LensflareElement(textureFlare0, 700, 0));
      lensflare.addElement(new LensflareElement(textureFlare3, 60, 0.6));
      lensflare.addElement(new LensflareElement(textureFlare3, 70, 0.7));
      lensflare.addElement(new LensflareElement(textureFlare3, 120, 0.9));
      lensflare.addElement(new LensflareElement(textureFlare3, 70, 1));

      lightRef.current.add(lensflare);
    }
  }, [textureFlare0, textureFlare3]);

  return (
    <mesh {...props} ref={sunRef}>
      <pointLight
        castShadow
        power={10000}
        decay={1.3}
        ref={lightRef}
        distance={500}
      ></pointLight>

      <sphereGeometry args={[4, 32, 32]} />
      <meshStandardMaterial
        map={props.map}
        emissive={"red"}
        emissiveIntensity={1.3}
      ></meshStandardMaterial>
      {/* <meshPhysicalMaterial color={"yellow"} /> */}
    </mesh>
  );
}
