import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 w-3/5 mx-auto my-auto bg-gray-800">
      <h1> Welcome to our Three.js project</h1>
      <br />
      <h2>By Alex Adlam & Daniel Szabo</h2>
      <br />
      <Link href={"/alex"}>Click here to view our demo!</Link>
      <br />
      <p>
        In this project we have used Three.js with Next.js. This means that we
        did not use the normal Three.js package we instead used the React Three
        Fiber package. This package does not limit any function from Three.js
        and infect can outperform Three.js when scaled up to do Reacts
        scheduling abilities. First you will need to install the Three.js
        package. For Vanilla Three.js you will need to instal Three from NPM.
      </p>
      <br />
      <code>
        <pre>npm install three</pre>
      </code>
      <br />
      <p>
        As previously stated we are using Next.js and so need the React version.
      </p>
      <br />
      <code>
        <pre>npm install three @react-three/fiber</pre>
      </code>
      <br />
      <p>
        Once the package is installed to start using it you will need to perform
        a little set up. The first thing you should do is read the Three.js
        documentation to get a basic understanding of a scene, a camera, a mesh,
        geometry, and material.
      </p>
      <br />
      <ul>
        <li>
          Scene: lets you set up what is going to be rendered and where it
          renders. In here that you place other objects such as cameras and
          lights.
        </li>
        <br />
        <li>Camera: determines the area of the scene that is visible.</li>
        <br />
        <li>
          Mesh: this represents the polygon mesh that objects are created from.
        </li>
        <br />
        <li>
          Geometry: this is a representation of mesh, line, or point geometry.
          This inclused vertex positions, face indices, normal, colours, and
          custom attributes. There are pre-made geometries such as BoxGeometry,
          SphereGeometry, etc.
        </li>
        <br />
        <li>
          Material: describe the appearance of objects. This allows you to
          change the opacity, shadowSide, visibility, etc.
        </li>
        <br />
      </ul>
      <p>
        When you understand these concepts, you are ready to create your first
        scene. You will need to create a Canvas. This can be imported,{" "}
        {`import{" "}
        {Canvas} from &apos;@react-three/fiber&apos;`}
        , at the top of your page.js. The Canvas component does much of the set
        up for us, so we do not need to manually set up a Scene and Camera. It
        also renders our scene every frame so we do not need a render loop. A
        basic example follows:
      </p>
      <br />
      <code>
        <pre>{`import { Canvas } from '@react-three/fiber'

export default function App() {
  return (
    <div id="canvas-container">
      <Canvas />
    </div>
  )
}
`}</pre>
      </code>
      <br />
      <p>
        You will then need to add light to your scene or nothing will be visible
        even it it is within the camera’s FOV. You can add ambient light to the
        whole scene or you can add directional light from a source. As we import
        Three.js components we can pass information into them via props we don’t
        need to construct the objects with the property ourselves. For instance
        {`<ambientLight intensity={0.1} />`}
        Is the same as using:
      </p>
      <br />
      <code>
        <pre>{`const light = new THREE.AmbientLight()
light.intensity = 0.1
`}</pre>
      </code>
      <br />
      <p>
        Once you have the canvas and lighting set up you can try adding an
        object into your scene. You can either directly create a mesh object
        inside the canvas, you can create a mesh object and pass properties into
        it as props or you can create a React component that you can re-use and
        import it into your canvas. If you wantr to create a rectangular cuboid
        you can use BoxGeometry. You can oneagain manually create the
        BoxGeometry object, but as we are using react you can simply put{" "}
        {`<boxGeometry args={[2, 2, 2]} />`} inside your mesh object.
        Here&apos;s the component I made:
      </p>
      <br />
      <code>
        <pre>{` export default function Box(props) {
  return (
    <mesh {...props} recieveShadow={true} castShadow>
      <boxGeometry />
      <meshPhysicalMaterial color={"white"} />
    </mesh>
  );
}
`}</pre>
      </code>
      <br />
      <div className="flex">
        <a href="https://threejs.org/docs/">Three.js docs</a>
        <br />
        <a href="https://docs.pmnd.rs/react-three-fiber/getting-started/introduction">
          React Three Fiber docs
        </a>
        <br />
        <a href="https://github.com/Adlam4002">Alex&apos;s GitHub</a>
        <br />
        <a href="https://github.com/d-g-Szabo">Daniel&apos;s GitHub</a>
      </div>
    </main>
  );
}
