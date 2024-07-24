import { extend, useLoader } from "@react-three/fiber";
import {
  Lensflare,
  LensflareElement,
} from "three/examples/jsm/objects/Lensflare.js";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import lensflare0 from "../assets/lensflare0.png";
import lensflare3 from "../assets/lensflare3.png";

extend({ Lensflare, LensflareElement });

const Flares = () => {
  const [flare0, flare3] = useLoader(TextureLoader, [lensflare0, lensflare3]);

  return (
    <pointLight intensity={3} position={[2, 2, 2]} color="white">
      <lensflare>
        <lensflareElement texture={flare0} size={60} distance={0.6} />
        <lensflareElement texture={flare3} size={70} distance={0.7} />
        <lensflareElement texture={flare3} size={120} distance={0.9} />
        <lensflareElement texture={flare3} size={70} distance={1} />
      </lensflare>
    </pointLight>
  );
};

export default Flares;
