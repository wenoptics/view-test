<template>
  <q-page class="flex flex-center">
    <div ref="container" @mousemove="onMouseMove" @resize="onResize"></div>
  </q-page>
</template>

<script>
import * as THREE from "three";
import Player from "components/ThreePlayer";

let player = null;
const mouse = new THREE.Vector2();
const raycaster = new THREE.Raycaster();

export default {
  name: "PageIndex",
  methods: {
    onMouseMove(event) {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
      // eslint-disable-next-line no-console
    },
    onResize() {
      const c = window;
      player.setSize(c.innerWidth, c.innerHeight);
    },
    raycast: function() {
      // update the picking ray with the camera and mouse position
      raycaster.setFromCamera(mouse, player.camera);

      // calculate objects intersecting the picking ray
      var intersects = raycaster.intersectObjects(player.scene.children, false);

      for (var i = 0; i < intersects.length; i++) {
        intersects[i].object.material.color.set(0xff0000);
      }
    }
  },
  mounted() {
    var loader = new THREE.FileLoader();
    loader.load("statics/models/app.json", text => {
      player = new Player();
      player.load(JSON.parse(text));
      player.setSize(window.innerWidth, window.innerHeight);
      player.play();
      player.onRender = () => {
        this.raycast();
      };
      window.player = player;

      this.$refs["container"].appendChild(player.dom);

      window.addEventListener("resize", this.onResize);
    });
  }
  // mounted() {
  //   var scene = new THREE.Scene();
  //   scene.background = new THREE.Color(0xFFFFFF);
  //
  //   var renderer = new THREE.WebGLRenderer();
  //   renderer.setSize(window.innerWidth, window.innerHeight);
  //   this.$refs["container"].appendChild(renderer.domElement);
  //
  //   var camera = new THREE.PerspectiveCamera(
  //     75,
  //     window.innerWidth / window.innerHeight,
  //     0.1,
  //     1000
  //   );
  //   var controls = new OrbitControls(camera, renderer.domElement);
  //
  //   // Instantiate a loader
  //   var loader = new GLTFLoader();
  //
  //   // Load a glTF resource
  //   loader.load(
  //     // resource URL
  //     "statics/models/scene.txt",
  //     // called when the resource is loaded
  //     function(gltf) {
  //       scene.add(gltf.scene);
  //
  //       // gltf.animations; // Array<THREE.AnimationClip>
  //       // gltf.scene; // THREE.Group
  //       // gltf.scenes; // Array<THREE.Group>
  //       // gltf.cameras; // Array<THREE.Camera>
  //       // gltf.asset; // Object
  //     },
  //     // called while loading is progressing
  //     function(xhr) {
  //       // eslint-disable-next-line no-console
  //       console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
  //     },
  //     // called when loading has errors
  //     function(error) {
  //       // eslint-disable-next-line no-console
  //       console.log("An error happened", error);
  //     }
  //   );
  //
  //   camera.position.z = 10;
  //   controls.update();
  //
  //   var animate = function() {
  //     requestAnimationFrame(animate);
  //
  //     controls.update();
  //
  //     renderer.render(scene, camera);
  //   };
  //
  //   animate();
  // }
};
</script>
