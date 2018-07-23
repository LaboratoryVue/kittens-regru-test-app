import Vue from 'vue';
import Vuex from 'vuex';
import tiles from '@/api/tiles.json';

Vue.use(Vuex);

const state = {
  tiles: []
};

const mutations = {
  INIT_TILES(state) {
    state.tiles = tiles.tiles;
  }
};

const getters = {
  getTiles(state) {
    return state.tiles;
  },
  getSelectedTile(state) {
    return id => state.tiles.find(tile => tile.id === Number(id));
  }
};

const actions = {
  initData({ commit }) {
    commit('INIT_TILES');
  }
};

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
});
