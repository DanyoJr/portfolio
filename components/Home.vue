<template>
    <div class="componentHome">
        <div class="infos">
            <h1 id="daniel">Hi. I'm Daniel.</h1>
            <strong><p id="system">&lt;system analysis and development student&gt;</p></strong>    
        </div>
    </div> 
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  const texto = document.getElementById('system') as HTMLElement
  const textoOriginal = texto.textContent || ''
  texto.textContent = ''

  let i = 0
  function animate() {
    texto.textContent += textoOriginal[i]
    i++

    if (i < textoOriginal.length) {
      setTimeout(() => {
        requestAnimationFrame(animate)
      }, 50)
    }
  }

  animate()
})
</script>

<style>
.componentHome {
    height: 50rem;
    max-width: 100%;
    display: flex;
    justify-content: center; 
    align-items: center;    
    text-align: center;      
}
</style>