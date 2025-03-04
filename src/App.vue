<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TopBar from "./components/ComponentSections/TopBar.vue"
// import MiddleSection from './components/MiddleSection.vue';
import BottomSection from "./components/ComponentSections/BottomSection.vue"
</script>

<template>

  <div class="main">
    <!-- <TopBar /> -->
    <div>
      <RouterView />
      <BottomSection />
    </div>
  </div>
  <!-- <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink> -->




</template>

<style scoped>
.main {
  width: 100vw;
  display: flex;
  padding: 0px;
  flex-direction: column;
  justify-content: center;
}
</style>
