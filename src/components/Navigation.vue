<template>
  <div class="navigation">
    <router-link class="navigation__item" to="/">home</router-link>
    <router-link class="navigation__item" to="/about">about</router-link>
    <router-link class="navigation__item" to="/whatever">what ever</router-link>
  </div>
</template>

<script>
export default {
  name: 'Navigation'
};
</script>

<style lang="scss" scoped>
.navigation {
  display: flex;
  padding: 30px;

  &__item {
    text-transform: capitalize;
    margin-right: 1rem;
    color: black;

    &.router-link-exact-active {
      text-decoration: none;
      font-weight: 700;
    }
  }
}
</style>
