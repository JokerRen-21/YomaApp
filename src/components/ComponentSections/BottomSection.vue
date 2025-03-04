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
  box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  color: grey;
  transition: color 0.4s ease;
}

.bottom-nav a {
  padding: 12px 5px;
  /* Apply padding uniformly */
  text-decoration: none;
  /* Remove underline */
  color: grey;
  /* Default grey color */
  transition: color 0.5s ease-in-out;
  /* Only animate color */
}

/* Active link color change without affecting padding */
.bottom-nav a.router-link-active {
  color: blue;
  /* Change color when active */
}

/* Smooth transition only for color change */
.bottom-nav a.router-link-active {
  color: blue;
  transition: color 0.5s ease-in-out;
  /* Only animate color */
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
