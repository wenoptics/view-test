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
import axios from "axios";

let player = null;
const mouse = new THREE.Vector2();

const raycaster = new THREE.Raycaster();
raycaster.params.Line.threshold = 10;
raycaster.params.Points.threshold = 10;

const controlHost = "http://192.168.1.200:5000";

let container_rect = {};
let group_controllable = null;

export default {
  name: "PageIndex",
  methods: {
    showNotif(name, onoff) {
      this.$q.notify({
        message: name + " goes " + (onoff ? "on" : "off"),
        caption: "",
        color: "secondary"
      });
    },
    onMouseMove(event) {
      const { width, height, x, y } = container_rect;
      mouse.x = ((event.clientX - x) / width) * 2 - 1;
      mouse.y = -((event.clientY - y) / height) * 2 + 1;
      // eslint-disable-next-line no-console
      // console.log(mouse);
    },
    onResize() {
      const { width, height } = (container_rect = this.$refs[
        "container"
      ].getBoundingClientRect());
      player.setSize(width, height);
    },
    raycast: function() {
      // update the picking ray with the camera and mouse position
      raycaster.setFromCamera(mouse, player.camera);

      // calculate objects intersecting the picking ray
      var intersects = raycaster.intersectObjects(
        group_controllable.children,
        true
      );

      // for (var i = 0; i < intersects.length; i++) {
      //   intersects[i].object.visibility = !intersects[i].object.visibility;
      // }

      let _c, _obj;
      if (intersects.length > 0) {
        switch (intersects[0].object.name) {
          case "Sphere_living_1":
            _obj = intersects[0].object.children[0];
            _obj.visible = !_obj.visible;
            _c = _obj.visible ? "on" : "off";
            this.showNotif("Living room light group", _obj.visible);
            axios.get(controlHost + "/living/" + _c);
            break;
          case "Sphere_bedroom_1":
            _obj = intersects[0].object.children[0];
            _obj.visible = !_obj.visible;
            _c = _obj.visible ? "on" : "off";
            this.showNotif("Living room light group", _obj.visible);
            axios.get(controlHost + "/bedroom/" + _c);
            break;
          default:
            // eslint-disable-next-line no-console
            console.log("clicked on", intersects[0].object.name);
        }
      }
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

      player.scene.scale.x = player.scene.scale.y = player.scene.scale.z = 2.48;
      player.scene.position.x = -9.58;
      player.scene.position.z = -11.36;
      player.orbitControls.maxPolarAngle = Math.PI / 2;

      window.player = player;

      this.$refs["container"].appendChild(player.dom);
      window.addEventListener("touchstart", event => {
        // eslint-disable-next-line no-console
        const { width, height, x, y } = container_rect;
        mouse.x = ((event.touches[0].clientX - x) / width) * 2 - 1;
        mouse.y = -((event.touches[0].clientY - y) / height) * 2 + 1;
        this.raycast();
      });

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
