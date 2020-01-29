import Vue from 'vue';
import Vuex from 'vuex';
import { RootState } from './types';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store<RootState>({
	state: {
		towers: undefined
	},
	mutations: {
		setTowersData(state, payload) {
			state.towers = payload.towers;
		}
	},
	actions: {
		async fetchTowersData({ commit }, options) {
			const result = await axios.get(options.url);
			if (result.status !== 200) {
				throw new Error(result.statusText);
			}

			commit('setTowersData', result.data);
		}
	},
	modules: {}
});
