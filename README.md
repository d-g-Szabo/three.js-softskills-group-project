# Three.js project documentation

In this project we have used Three.js with Next.js. This means that we did not use the normal Three.js package we instead used the React Three Fiber package. This package does not limit any function from Three.js and infect can outperform Three.js when scaled up to do Reacts scheduling abilities. First you will need to install the Three.js package. For Vanilla Three.js you will need to instal Three from NPM, “npm install three”. As previously stated we are using Next.js and so need the React version, “npm install three @react-three/fiber”.

Once the package is installed to start using it you will need to perform a little set up. The first thing you should do is read the Three.js documentation to get a basic understanding of a scene, a camera, a mesh, geometry, and material.

- Scene: lets you set up what is going to be rendered and where it renders. In here that you place other objects such as cameras and lights.

- Camera: determines the area of the scene that is visible.

- Mesh: this represents the polygon mesh that objects are created from.

- Geometry: this is a representation of mesh, line, or point geometry. This inclused vertex positions, face indices, normal, colours, and custom attributes. There are pre-made geometries such as BoxGeometry, SphereGeometry, etc.

- Material: describe the appearance of objects. This allows you to change the opacity, shadowSide, visibility, etc.

When you understand these concepts, you are ready to create your first scene. You will need to create a Canvas. This can be imported, import { Canvas } from '@react-three/fiber', at the top of your page.js. The Canvas component does much of the set up for us, so we do not need to manually set up a Scene and Camera. It also renders our scene every frame so we do not need a render loop. A basic example follows:

```
import { Canvas } from '@react-three/fiber'

export default function App() {
  return (
    <div id="canvas-container">
      <Canvas />
    </div>
  )
}
```

You will then need to add light to your scene or nothing will be visible even it it is within the camera’s FOV. You can add ambient light to the whole scene or you can add directional light from a source. As we import Three.js components we can pass information into them via props we don’t need to construct the objects with the property ourselves. For instance
`<ambientLight intensity={0.1} />`
Is the same as using

```
const light = new THREE.AmbientLight()
light.intensity = 0.1
```

Once you have the canvas and lighting set up you can try adding an object into your scene. You can either directly create a mesh object inside the canvas, you can create a mesh object and pass properties into it as props or you can create a React component that you can re-use and import it into your canvas. If you wantr to create a rectangular cuboid you can use BoxGeometry. You can oneagain manually create the BoxGeometry object, but as we are using react you can simple put `<boxGeometry args={[2, 2, 2]} />` inside your mesh object. Here’s the component I made: `export default function Box(props) {
  return (
    <mesh {...props} recieveShadow={true} castShadow>
      <boxGeometry />
      <meshPhysicalMaterial color={"white"} />
    </mesh>
  );
}`

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
