<script setup>
import { ref, onMounted } from 'vue'
import * as THREE from 'three'

const target = ref()

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, 500 / 500, 0.1, 1000)

const renderer = new THREE.WebGLRenderer()
renderer.setSize(500, 500)

const geometry = new THREE.BoxGeometry(1, 2, 1)
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
const cube = new THREE.Mesh(geometry, material)
scene.add(cube)

camera.position.z = 5

const options = ['rectangle', 'triangle', 'circle']

const selectedOption = ref(options[0])

function setShape() {
  if (selectedOption.value === 'rectangle') {
    cube.geometry = new THREE.BoxGeometry(1, 2, 1)
  } else if (selectedOption.value === 'triangle') {
    cube.geometry = new THREE.CylinderGeometry(0, 1, 2, 4, 1)
  } else if (selectedOption.value === 'circle') {
    cube.geometry = new THREE.SphereGeometry(1, 32, 16)
  }
}

function animate() {
  requestAnimationFrame(animate)

  setShape()

  cube.rotation.x += 0.01
  cube.rotation.y += 0.01

  renderer.render(scene, camera)
}

onMounted(() => {
  target.value.appendChild(renderer.domElement)
  animate()
})
</script>

<template>
  <div class="wrapper">
    <select v-model="selectedOption">
      <option v-for="option in options" :key="option" :value="option">
        {{ option }}
      </option>
    </select>
    <div ref="target"></div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.wrapper > div {
  margin: 0 0.5rem;
}
</style>
