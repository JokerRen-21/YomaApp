<template>
  <div class="bottom-nav">

    <div class="iconlink">
      <RouterLink to="/">
        <div>
          <font-awesome-icon :icon="['far', 'newspaper']" />
        </div>
        Home
      </RouterLink>
    </div>


    <div class="iconlink">
      <RouterLink to="/chat">
        <div>
          <font-awesome-icon :icon="['far', 'comment']" />
        </div>
        Chat
      </RouterLink>
    </div>


    <div class="iconlink">
      <RouterLink to="/portal">
        <div>
          <font-awesome-icon :icon="['fas', 'globe']" />
        </div>

        Portal
      </RouterLink>
    </div>

    <!-- testing again here for the personal access token in GitLabs -->
    <div class="iconlink">
      <RouterLink to="/office">
        <div>
          <font-awesome-icon :icon="['fas', 'suitcase']" />
        </div>

        Office
      </RouterLink>
    </div>


    <div class="iconlink">
      <RouterLink to="/noti">
        <div>
          <font-awesome-icon :icon="['far', 'bell']" />
        </div>

        Noti
      </RouterLink>
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
  color: grey;
}

svg {
  width: 20px;
  height: 20px;
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
