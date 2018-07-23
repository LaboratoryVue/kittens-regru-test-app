import Vue from 'vue';
import Vuex from 'vuex';
import tiles from '@/api/tiles.json';
import axios from '@/plugins/axios.js';

Vue.use(Vuex);

const state = {
  tiles: []
};

const mutations = {
  INIT_TILES(state) {
    const temp = tiles.tiles;
    if (!temp) return;
    const config = {
      params: {
        client_id:
          '98ebd7d54e49d7201ecfdf37a2434c0ac93121312666ad26d689410c401dc46b',
        per_page: temp.length,
        query: 'cat',
        orientation: 'squarish'
      }
    };
    axios.get('photos', config).then(response => {
      for (let i = 0; i < temp.length; i += 1) {
        temp[i].urls = response.data.results[i].urls;
      }
      state.tiles = temp;
    });
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
