<template>
  <section class="preview">
    <h3 class="preview__title">{{ tile.title }} {{ tile.id }}</h3>
    <p class="preview__description">{{ tile.description }}</p>
    <p class="preview__text">{{ tile.text | trancate }}</p>
    <button @click="onSelect()" type="button">go back</button>
  </section>
</template>

<script>
export default {
  name: 'Preview',
  methods: {
    onSelect() {
      this.$router.push('/');
    }
  }
};
</script>

<style lang="scss" scoped>
//
</style>
