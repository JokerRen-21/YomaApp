<script setup>
import BottomBar4 from './BottomBarComponents/BottomBar4.vue';

// const openReadmeInEditor = () => fetch('/__open-in-editor?file=README.md')
</script>

<template>
  <div class="main">
    <BottomBar4 />
    This here will be the Office Page
  </div>
</template>
<!-- do remind youself that the components, router, and views are the important one here -->
<style>
.main {
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  gap: 20px;
  padding: 15px 10px;
}
</style>
