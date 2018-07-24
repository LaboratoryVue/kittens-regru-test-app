<template>
  <section id="app">
    <navigation />
    <div class="wrapper">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </div>
  </section>
</template>

<script>
import Navigation from '@/components/Navigation';
export default {
  name: 'appRoot',
  components: {
    Navigation
  }
};
</script>


<style lang="scss">
@import '@/assets/_variables';
// BASE STYLES
*,
*:before,
*:after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

html,
body {
  margin: 0;
}

body {
  margin: 0 auto;
  max-width: $base-width;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

// WRAPPER
.wrapper {
  padding: 1rem 2rem;
}

// ANIMATE ROUTES
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
