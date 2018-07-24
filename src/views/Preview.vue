<template>
  <section class="preview" :style="{'background-image': `url(${preview.urls.regular})`}">
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
// PREVIEW
.preview {
  padding: 2rem 1rem;
  background-position: center;
  background-size: cover;
  min-height: 350px;

  // PREVIEW BODY
  &__body {
    margin-bottom: 2rem;
    background-color: rgba(255, 255, 255, 0.4);
    padding: 2rem 1rem;
    border-radius: 0.4rem;

    // PREVIEW CONTENT
    & .content {
      //
      &__title {
        text-transform: capitalize;
        margin: 0 0 1rem;
        font-size: 1.4rem;
        text-shadow: 1px 1px 1px rgba(255, 255, 255, 0.4);
      }

      &__description {
        margin: 0 0 1rem;
        font-weight: 700;
        font-size: 0.9rem;
        text-shadow: 1px 1px 1px rgba(255, 255, 255, 0.4);
      }

      &__text {
        font-style: italic;
        font-size: 0.86rem;
        line-height: 1.3;
        margin: 0 0 1rem;

        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }

  // PREVIEW FOOTER
  &__footer {
    //
    & .control {
      //
      &__button {
        cursor: pointer;
        text-transform: capitalize;
        border: none;
        border-radius: 0.2rem;
        padding: 0.6rem 1rem;
        background-color: lightgrey;
        font-weight: 700;
        text-shadow: 1px 1px 1px rgba(255, 255, 255, 0.4);
        transition: background-color 0.2s;

        &:hover {
          background-color: darken(lightgrey, 15%);
        }

        &:focus,
        &:active {
          outline: none;
        }
      }
    }
  }
}
</style>
