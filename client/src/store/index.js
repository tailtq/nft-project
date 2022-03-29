import { createStore } from 'vuex';
import createPersistentState from 'vuex-persistedstate';

export default createStore({
  plugins: [
    createPersistentState(),
  ],
  state: {
    isWalletConnected: false,
  },
  getters: {
    isWalletConnected(state) {
      return state.isWalletConnected;
    },
  },
  mutations: {
    connectWallet(state, isConnected) {
      state.isWalletConnected = isConnected;
    },
  },
  actions: {
    /**
     * @param commit
     * @param {boolean} isConnected
     */
    connectWallet({ commit }, isConnected) {
      commit('connectWallet', isConnected);
    },
  },
  modules: {
  },
});
