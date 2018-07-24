<template>
  <router-link :to="`/preview/${tile.id}`" class="tile tile--block tile--link" :class="type" :style="{'background-image': `url(${tile.urls.regular})`}">
    <section class="tile__underlay">
      <h3 class="tile__caption">{{ tile.title }} {{ tile.id }}</h3>
      <p class="tile__description">{{ tile.description }}</p>
      <p class="tile__text">{{ tile.text | trancate }}</p>
    </section>
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
  display: flex;
  flex-direction: column;

  &--block {
    min-height: 250px;
    padding: 1rem;
    border: 4px solid white;
  }

  &--link {
    text-decoration: none;
    color: black;
    background-position: center;
    background-size: cover;
  }

  &__underlay {
    background-color: rgba(255, 255, 255, 0.4);
    padding: 1rem;
    border-radius: 0.2rem;
  }

  &__caption {
    text-transform: capitalize;
    margin: 0 0 1rem;
  }

  &__description {
    margin: 0 0 0.6rem;
    font-weight: 700;
    font-size: 0.8rem;
  }

  &__text {
    font-style: italic;
    font-size: 0.85rem;
    margin: 0 0 0.6rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
}

// MEDIA QUERIES
@media all and (max-width: 320px) {
  .tile--normal,
  .tile--double {
    width: 100%;
  }
}

@media all and (min-width: 321px) and (max-width: 480px) {
  .tile--normal,
  .tile--double {
    width: calc(100% / 2);
  }
}

@media all and (min-width: 481px) {
  .tile--normal {
    width: calc(100% / 3);
  }
  .tile--double {
    width: calc(100% / 2);
  }
}
</style>
