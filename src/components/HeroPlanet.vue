<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import * as THREE from 'three'

const containerRef = ref<HTMLDivElement | null>(null)

let renderer: THREE.WebGLRenderer | null = null
let animationFrameId = 0

onMounted(() => {
  if (!containerRef.value) return

  const scene = new THREE.Scene()

  const camera = new THREE.PerspectiveCamera(
    75,
    containerRef.value.clientWidth / containerRef.value.clientHeight,
    0.1,
    1000,
  )

  camera.position.z = 6

  renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
  })

  renderer.setSize(containerRef.value.clientWidth, containerRef.value.clientHeight)
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setClearColor(0x000000, 0)
  containerRef.value.appendChild(renderer.domElement)

  scene.add(new THREE.AmbientLight('#ffffff', 0.9))

  const directionalLight = new THREE.DirectionalLight('#ffffff', 2)
  directionalLight.position.set(5, 5, 5)
  scene.add(directionalLight)

  const pointLightLeft = new THREE.PointLight('#22d3ee', 1.5)
  pointLightLeft.position.set(-5, 5, 5)
  scene.add(pointLightLeft)

  const pointLightRight = new THREE.PointLight('#a855f7', 1.5)
  pointLightRight.position.set(5, -5, 5)
  scene.add(pointLightRight)

  const earthMaterial = new THREE.MeshStandardMaterial({
    color: '#2563eb',
    emissive: '#172554',
    metalness: 0.35,
    roughness: 0.45,
  })

  const cloudMaterial = new THREE.MeshBasicMaterial({
    color: '#67e8f9',
    wireframe: true,
    transparent: true,
    opacity: 0.28,
  })

  const glowMaterial = new THREE.MeshBasicMaterial({
    color: '#a855f7',
    transparent: true,
    opacity: 0.18,
  })

  const coreMaterial = new THREE.MeshBasicMaterial({
    color: '#22d3ee',
    transparent: true,
    opacity: 0.9,
  })

  const earth = new THREE.Mesh(
    new THREE.SphereGeometry(2.5, 96, 96),
    earthMaterial,
  )

  const cloud = new THREE.Mesh(
    new THREE.SphereGeometry(2.6, 96, 96),
    cloudMaterial,
  )

  const glow = new THREE.Mesh(
    new THREE.SphereGeometry(2.8, 96, 96),
    glowMaterial,
  )

  const core = new THREE.Mesh(
    new THREE.SphereGeometry(1, 64, 64),
    coreMaterial,
  )


  scene.add(earth)
  scene.add(cloud)
  scene.add(glow)
  scene.add(core)

  const colorA = new THREE.Color('#2563eb')
  const colorB = new THREE.Color('#22d3ee')
  const colorC = new THREE.Color('#a855f7')
  const colorD = new THREE.Color('#facc15')
  const colorE = new THREE.Color('#fb7185')

  const animate = () => {
    const time = performance.now() * 0.001

    const colorMix = (Math.sin(time * 1.2) + 1) / 2
    const colorMix2 = (Math.sin(time * 1.2 + 2) + 1) / 2

    const planetColor = colorA.clone().lerp(colorB, colorMix).lerp(colorC, colorMix2 * 0.6)
    const glowColor = colorC.clone().lerp(colorD, colorMix)
    const coreColor = colorB.clone().lerp(colorE, colorMix2)

    earthMaterial.color.copy(planetColor)
    earthMaterial.emissive.copy(planetColor.clone().multiplyScalar(0.25))

    cloudMaterial.color.copy(glowColor)
    glowMaterial.color.copy(glowColor)
    coreMaterial.color.copy(coreColor)

    pointLightLeft.color.copy(planetColor)
    pointLightRight.color.copy(glowColor)

    earth.rotation.y += 0.006
    earth.rotation.x = Math.sin(time * 0.3) * 0.15

    cloud.rotation.y -= 0.009
    cloud.rotation.z += 0.0015

    glow.rotation.y += 0.003

    core.rotation.x += 0.014
    core.rotation.y += 0.018

    const pulse = 0.85 + Math.sin(time * 2) * 0.07
    core.scale.set(pulse, pulse, pulse)

    renderer?.render(scene, camera)
    animationFrameId = requestAnimationFrame(animate)
  }

  animate()

  const handleResize = () => {
    if (!containerRef.value || !renderer) return

    const width = containerRef.value.clientWidth
    const height = containerRef.value.clientHeight

    camera.aspect = width / height
    camera.updateProjectionMatrix()
    renderer.setSize(width, height)
  }

  window.addEventListener('resize', handleResize)

  onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
  })
})

onUnmounted(() => {
  cancelAnimationFrame(animationFrameId)

  if (renderer) {
    renderer.dispose()
    renderer.domElement.remove()
  }
})
</script>

<template>
  <div ref="containerRef" class="w-full h-full" />
</template>