<template>
  <router-link :to="`/preview/${tile.id}`" class="tile tile--block tile--link" :class="type" :style="{'background-image': `url(${tile.urls.regular})`}">
    <h3 class="tile__caption">{{ tile.title }} {{ tile.id }}</h3>
    <p class="tile__description">{{ tile.description }}</p>
    <p class="tile__text">{{ tile.text | trancate }}</p>
  </router-link>
</template>

<script>
export default {
  name: 'Tile',
  props: {
    tile: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    type() {
      return this.tile.type === 'normal' ? 'tile--normal' : 'tile--double';
    }
  }
};
</script>

<style lang="scss" scoped>
.tile {
  flex: auto;
  height: 250px;
  min-width: 150px;
  margin: 0 8px 8px 0;

  &--block {
    display: block;
    padding: 2rem 1rem;
    border: 1px solid #000;
    border-radius: 0.2rem;
  }

  &--link {
    text-decoration: none;
    color: black;
    // background-position: 0 0;
    background-position: center;
    background-size: cover;
  }

  &--normal {
    width: 250px;
  }

  &--double {
    width: 500px;
  }

  &__caption {
    text-transform: capitalize;
    margin: 0 0 1rem;
  }

  &__description {
    margin: 0 0 0.8rem;
    font-weight: 700;
    font-size: 0.95rem;
  }

  &__text {
    font-style: italic;
    font-size: 0.85rem;
  }
}
</style>
