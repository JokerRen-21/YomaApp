<script setup>
import Office from '@/components/Office.vue';
</script>

<template>
  <div class="content">
    <div class="logo">
      <!-- <img
        src="https://play-lh.googleusercontent.com/7sUMWw_QaNOaSKw6fwS9QENfu4Arj7sqTYPtv7UmxW-g2qJL6Ppv-Ft5G-lvW1ITxB4=w480-h960"
        alt="logo" /> -->

    </div>
    <div class="icon">

      <font-awesome-icon :icon="['fas', 'phone']" />
      <font-awesome-icon :icon="['far', 'id-badge']" />
    </div>
  </div>
  <main style="padding-top: 50px;">
    <Office />
  </main>
</template>
<style scoped>
.content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  /* Soft bottom shadow */
  padding: 15px 15px;
  position: fixed;
  /* Keeps it on top during scroll */
  top: 0;
  left: 0;
  width: 100vw;
  font-size: large;
  z-index: 999;
  /* High z-index to stay on top */
  background: white;
  /* SOLID background prevents transparency */
}

.icon {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 17px;
  justify-content: center;
}

.logo {
  display: flex;
}

.logo img {
  height: 30px;
  /* Set the same height as text */
  width: auto;
  /* Maintain aspect ratio */
  /* object-fit: cover; */
  /* Prevent distortion */
}
</style>
