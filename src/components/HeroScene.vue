<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import * as THREE from 'three'

const containerRef = ref<HTMLDivElement | null>(null)
let renderer: THREE.WebGLRenderer | null = null
let animationFrameId = 0

onMounted(() => {
  if (!containerRef.value) return

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(75, containerRef.value.clientWidth / containerRef.value.clientHeight, 0.1, 1000)
  camera.position.z = 5

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setSize(containerRef.value.clientWidth, containerRef.value.clientHeight)
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setClearColor('#020617', 1)
  containerRef.value.appendChild(renderer.domElement)

  const particlePositions = new Float32Array(
    Array.from({ length: 250 }, () => [
      (Math.random() - 0.5) * 12,
      (Math.random() - 0.5) * 12,
      (Math.random() - 0.5) * 12,
    ]).flat(),
  )

  const particlesGeometry = new THREE.BufferGeometry()
  particlesGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3))

  const particles = new THREE.Points(
    particlesGeometry,
    new THREE.PointsMaterial({
      color: '#67e8f9',
      size: 0.045,
      sizeAttenuation: true,
    }),
  )

  scene.add(particles)

  const animate = () => {
    particles.rotation.x += 0.0008
    particles.rotation.y += 0.0012

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