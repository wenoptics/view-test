
var scene = new THREE.Scene();
scene.background = new THREE.Color( 0x8FBCD4 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
var controls = new THREE.OrbitControls( camera, renderer.domElement );

// // instantiate a loader
// var loader = new THREE.OBJLoader();
//
// // load a resource
// loader.load(
//     // resource URL
//     'floorplan.obj',
//     // called when resource is loaded
//     function ( object ) {
//         scene.add( object );
//     },
//     // called when loading is in progresses
//     function ( xhr ) {
//         console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
//     },
//     // called when loading has errors
//     function ( error ) {
//         console.log( 'An error happened' );
//     }
// );

// // create a point light
// const pointLight =
//     new THREE.PointLight(0xFFFFFF);
//
// // set its position
// pointLight.position.x = 10;
// pointLight.position.y = 50;
// pointLight.position.z = 130;
// // add to the scene
// scene.add(pointLight);

// Instantiate a loader
var loader = new THREE.GLTFLoader();

// Load a glTF resource
loader.load(
    // resource URL
    'scene.txt',
    // called when the resource is loaded
    function ( gltf ) {

        scene.add( gltf.scene );

        // gltf.animations; // Array<THREE.AnimationClip>
        // gltf.scene; // THREE.Group
        // gltf.scenes; // Array<THREE.Group>
        // gltf.cameras; // Array<THREE.Camera>
        // gltf.asset; // Object

    },
    // called while loading is progressing
    function ( xhr ) {
        console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
    },
    // called when loading has errors
    function ( error ) {
        console.log( 'An error happened', error);
    }
);

camera.position.z = 10;
controls.update();

var animate = function () {
    requestAnimationFrame( animate );

    controls.update();

    renderer.render( scene, camera );
};

animate();