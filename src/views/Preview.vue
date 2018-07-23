<template>
  <section class="preview">
    <div class="preview__body content">
      <h3 class="content__title">{{ preview.title }} {{ preview.id }}</h3>
      <p class="content__description">{{ preview.description }}</p>
      <p class="content__text">{{ preview.text }}</p>
    </div>
    <div class="preview__footer control">
      <button class="control__button" @click="onSelect()" type="button">go back</button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Preview',
  computed: {
    preview() {
      return this.$store.getters.getSelectedTile(this.$route.params.id);
    }
  },
  methods: {
    onSelect() {
      this.$router.push('/');
    }
  }
};
</script>

<style lang="scss" scoped>
.preview {
  padding: 2rem 1rem;

  &__body {
    margin-bottom: 2rem;

    & .content {
      //
      &__title {
        text-transform: capitalize;
        margin: 0 0 1rem;
        font-size: 1.4rem;
      }

      &__description {
        margin: 0 0 1rem;
        font-weight: 700;
        font-size: 0.9rem;
      }

      &__text {
        font-style: italic;
        font-size: 0.86rem;
        line-height: 1.3;
        margin: 0 0 1rem;
      }
    }
  }

  &__footer {
    //
    & .control {
      //
      &__button {
        cursor: pointer;
        text-transform: capitalize;
      }
    }
  }
}
</style>
