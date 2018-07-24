<template>
  <router-link :to="`/preview/${tile.id}`" class="tile tile--block tile--link" :class="type" :style="{'background-image': `url(${tile.urls.regular})`}">
    <section class="tile__underlay content">
      <h3 class="content__caption">{{ tile.title }} {{ tile.id }}</h3>
      <p class="content__description">{{ tile.description }}</p>
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
// TILE
.tile {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &--block {
    min-height: 220px;
    padding: 1rem;
    border: 4px solid white;
  }

  &--link {
    text-decoration: none;
    color: black;
    background-position: center;
    background-size: cover;
    transition: all 0.2s;

    &:hover {
      transform: scale(1.1);
    }
  }

  // TILE UNDERLAY
  &__underlay {
    background-color: rgba(255, 255, 255, 0.4);
    padding: 1rem;
    border-radius: 0.2rem;

    // TILE CONTENT
    & .content {
      //
      &__caption {
        text-transform: capitalize;
        margin: 0 0 1rem;
        text-shadow: 1px 1px 1px rgba(255, 255, 255, 0.4);
      }

      &__description {
        margin: 0 0 0.6rem;
        font-weight: 700;
        font-size: 0.8rem;
        text-shadow: 1px 1px 1px rgba(255, 255, 255, 0.4);
      }
    }
  }
}

// MEDIA QUERIES
@media all and (max-width: 480px) {
  .tile--normal,
  .tile--double {
    width: 100%;
  }
}

@media all and (min-width: 481px) and (max-width: 1024px) {
  .tile--normal,
  .tile--double {
    width: calc(100% / 2);
  }
}

@media all and (min-width: 1025px) {
  .tile--normal {
    width: calc(100% / 3);
  }
  .tile--double {
    width: calc(100% / 2);
  }
}
</style>
