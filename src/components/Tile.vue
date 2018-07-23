<template>
  <router-link :to="`/preview/${tile.id}`" class="tile" :class="type" :style="{'background-image': `url(${tile.urls.regular})`}">
  <!-- <router-link :to="`/preview/${tile.id}`" class="tile" :class="tileType"> -->
    <!-- <img :src="tile.urls.regular" :alt="tile.title"> -->
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
  filters: {
    trancate(value) {
      return value.slice(0, 172);
    }
  },
  computed: {
    type() {
      return this.tile.type === 'normal' ? 'normal' : 'double';
    }
  }
};
</script>

<style lang="scss" scoped>
.tile {
  display: block;
  border: 1px solid #000;
  border-radius: 0.2rem;
  margin: 0.4rem;
  padding: 2rem 1rem;
  text-decoration: none;
  color: black;
  background-position: 0 0;
  background-size: cover;

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
.normal {
  // background-color: pink;
}
.double {
  // background-color: greenyellow;
}
</style>
