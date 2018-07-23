<template>
  <div class="tiles">
    <tile v-for="tile in tiles" :key="tile.id" :tile="tile" />
  </div>
</template>

<script>
import Tile from '@/components/Tile';
export default {
  name: 'Tiles',
  computed: {
    tiles() {
      return this.$store.getters.getTiles;
    }
  },
  components: {
    Tile
  }
};
</script>

<style scoped lang="scss">
//
</style>
