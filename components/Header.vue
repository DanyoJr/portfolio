<template>
  <div class="header">
    <div class="headerButtons">
      <h2 @click="scrollTo('home')">HOME</h2>
      <h2 @click="scrollTo('about')">ABOUT</h2>
      <h2 @click="scrollTo('contact')">CONTACT</h2>
    </div>
  </div>
</template>

<script setup lang="ts">
function scrollTo(section: string) {
  const el = document.getElementById(section)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style>
.header {
  padding: 1rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  backdrop-filter: blur(4px);
  background: rgba(255, 255, 255, 0.6);
  z-index: 1000;
}

.headerButtons {
  display: flex;
  gap: 2.5rem;
  justify-content: center;
}
.headerButtons h2 {
  cursor: pointer;
}

</style>