<template>
  <div class="bottom-nav">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/inbox">Inbox</RouterLink>
    <RouterLink to="/social">Social</RouterLink>
    <RouterLink to="/settings">Settings</RouterLink>
  </div>
</template>

<style scoped>
.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: white;
  /* Optional: set a background */
  box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.1);
  /* Soft shadow at the top */
  padding: 10px 0px;
  display: flex;
  justify-content: space-around;
  text-align: center;
}
</style>
