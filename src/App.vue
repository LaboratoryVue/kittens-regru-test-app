<template>
  <section id="app">
    <navigation />
    <div class="wrapper">
      <router-view />
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
  max-width: 960px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.wrapper {
  padding: 1rem 2rem;
}
</style>
