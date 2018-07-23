<template>
  <div class="home">
    <tiles />
  </div>
</template>

<script>
import Tiles from '@/components/Tiles.vue';
export default {
  name: 'HomePage',
  components: {
    Tiles
  }
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
}
</style>
