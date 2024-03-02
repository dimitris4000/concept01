<script setup>
import { ref } from 'vue';

defineProps({
  msg: String,
});

const count = ref(0);
</script>

<template>
  <div class="links">
    <a href="/index.html">Sandbox</a>
    <a href="/index2.html">Secrets Editor</a>
  </div>
</template>

<style scoped>
.links {
  position:fixed;
  top: 0;
  left: 0;
  width: 100%;
  /* border: 1px solid white; */
  color: #888;
}

a {
  padding: 0 1em;
}
a:hover {
  color: #AAA;
  text-shadow: 2px 2px 2px #555 ;
}
</style>
