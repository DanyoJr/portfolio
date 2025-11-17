<template>
  <Header />
  <main>   
    <section id="home">
      <Home />
    </section>
    <section>
      <!-- TODO: FAZER ALGUMA ANIMACAO INTERESSANTE ENTRE AS SECOES -->
    </section>
    <section id="about">
      <About />
    </section>

    <section id="contact">
      <Contact />
    </section>
</main>
</template>

<script setup lang="ts">
import Header from '../components/Header.vue'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Contact from '../components/Contact.vue'

const user = ref('Daniel Yoneshige Junior')

useHead({
  title: `${user.value}`
})

</script>

<style>
main {
  font-family: 'EB Garamond', serif;
  margin: 1rem 1rem 1rem 1rem;
  padding: 2rem;
}
html {
  scroll-behavior: smooth;
} 
</style>