<template>
  <q-page class="column">
    <div
      id="container"
      ref="container"
      @mousemove="onMouseMove"
      @click="raycast"
      style="flex: 1"
    ></div>
  </q-page>
</template>

<script>
import * as THREE from "three";
import Player from "components/ThreePlayer";
let player = null;
const mouse = new THREE.Vector2();

const raycaster = new THREE.Raycaster();
raycaster.params.Line.threshold = 10;
raycaster.params.Points.threshold = 10;

let container_rect = {};
let group_controllable = null;

export default {
  name: "PageIndex",
  methods: {
    onMouseMove(event) {
      const { width, height, x, y } = container_rect;
      mouse.x = ((event.clientX - x) / width) * 2 - 1;
      mouse.y = -((event.clientY - y) / height) * 2 + 1;
      // eslint-disable-next-line no-console
      // console.log(mouse);
    },
    onResize() {
      const { width, height } = container_rect = this.$refs["container"].getBoundingClientRect();
      player.setSize(width, height);
    },
    raycast: function() {
      // update the picking ray with the camera and mouse position
      raycaster.setFromCamera(mouse, player.camera);

      // calculate objects intersecting the picking ray
      var intersects = raycaster.intersectObjects(group_controllable.children, true);

      for (var i = 0; i < intersects.length; i++) {
        intersects[i].object.visibility = !intersects[i].object.visibility;
      }

      // eslint-disable-next-line no-console
      console.log(intersects);
    }
  },
  mounted() {
    var loader = new THREE.FileLoader();
    loader.load("statics/models/app.json", text => {
      player = new Player();
      player.load(JSON.parse(text));
      this.onResize();
      player.play();
      player.onRender = () => {
        //this.raycast();
      };

      group_controllable = player.scene.getChildByName("controllable");

      window.player = player;

      this.$refs["container"].appendChild(player.dom);

      // window.addEventListener("resize", this.onResize);
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
