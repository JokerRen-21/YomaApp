<template>
  <div class="bottom-nav">

    <div class="iconlink">
      <div>
        <font-awesome-icon :icon="['far', 'newspaper']" />
      </div>
      <RouterLink to="/">Home</RouterLink>
    </div>


    <div class="iconlink">
      <div>
        <font-awesome-icon :icon="['far', 'comment']" />
      </div>
      <RouterLink to="/chat">Chat</RouterLink>
    </div>


    <div class="iconlink">
      <div>
        <font-awesome-icon :icon="['fas', 'globe']" />
      </div>

      <RouterLink to="/portal">Portal</RouterLink>
    </div>

    <!-- testing again here for the personal access token in GitLabs -->
    <div class="iconlink">
      <div>
        <font-awesome-icon :icon="['fas', 'suitcase']" />
      </div>

      <RouterLink to="/office">Office</RouterLink>
    </div>


    <div class="iconlink">
      <div>
        <font-awesome-icon :icon="['far', 'bell']" />
      </div>

      <RouterLink to="/noti">Noti</RouterLink>
    </div>


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
  padding: 12px 6px;
  display: flex;
  justify-content: space-around;
  /* Even spacing */
  align-items: center;
  /* Centers items vertically */
  text-align: center;
}

svg {
  width: 24px;
  height: 24px;
}

a {
  padding: 0px;
}

.iconlink {
  display: flex;
  flex-direction: column;
  gap: 0px;
}
</style>
