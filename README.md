## Navigation

- [SGWorld](#SGWorld)
- [Technologies&Ecosystems](#Technologies&Ecosystems)
  - [React_Three_Cannon](##React_Three_Cannon)
  - [React_Three_Drei](##React_Three_Drei)
  - [React_Three_Fiber](##React_Three_Fiber)
- [Blender & React](#Blender_&_React)



# SGWorld

https://sgworld.netlify.app/

![SGWorld]()


This is my complex React project. In my previous app Vanilla-Date, I used 2D space. Now, I decided to go a step forward and use the maximum potential of 3D space. The main idea behind the project was to present my living space and the latest Vanilla-Date project. In the project, I used 3 React sub-libraries. React Cannon supports object physics. React Drei and React Fiber support HTML appearance and markup. I am the author of myself and the Paint.js object.


# Technologies&Ecosystems

![NPM]()


The official sub repository of React/Three/Fiber (https://github.com/pmndrs/react-three-fiber) has identified the ecosystems to support Three.js as complete toolkits. 
I decided to use three of them.

![toolkits]()

## React_Three_Cannon

Objects placed on the stage are visible to the camera, but they do not have physical properties. What does it mean? This means that they do not have their own mass, are not subject to gravity, and cannot be manipulated like physical objects in reality. In order for the user to stop in front of the wall, I had to use a useBox from the React / Three / Cannon sub-library. UseBox is a Hook that requires an object reference to be given by useRef to which we want to give physical properties. UseBox accepts the mass of the object, rotation and, most importantly, arguments responsible for the size of the object.

```
  const [cubeRef] = useBox(() => ({
    rotation: [0, -Math.PI / 2, 0],
    mass: 1000,
    args: [21, 3, 0.2],
    ...props
  }));
```

The physical properties of an object **are not the same** as the visible properties of an object.
Note that the camera stops not on the wall itself, but a little in front of it.

## React_Three_Drei

React Three Drei is the sub-library I use most often (https://github.com/pmndrs/react-three-fiber). In my opinion, it gives the most opportunities to be used. In the project I used a few of them and they are: Text, MeshDistortMaterial, Html, Sphere, SpotLight, Stars.

This library also includes Plane as a standalone component. For this project, I needed a Plane to have physical characteristics. Plane has to keep the player in space. So I used UsePlane from React/Three/Cannnon.

## React_Three_Fiber

React Three Fiber has proven to be helpful in creating lights and player movement. UseFrame is a particularly helpful tool. It is a hook that allows you to refresh the position and state of a specific component. However, it must be remembered that this movement remains indifferent to other physical objects. In order for an object to have full interaction with other physical objects, it should be connected to the react three cannon library

# Blender_&_React

In blender, I created a glb object with the mesh of myself. My main task was to model the face using appropriate textures (photos). The shape of the skull allowed the lights circulating in the ellipse to create shadows on the face. The implementation of the glb object was a simple directive generating a js file with reference to the glb object.

``
npx gltfjsx <name>.glb
``


![blender]()

