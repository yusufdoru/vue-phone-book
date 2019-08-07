import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    fullName: "",
    phoneNumber: ""
  },
  mutations: {
    setFullName(state, payload) {
      state.fullName = payload;
    },
    setPhoneNumber(state, payload) {
      state.phoneNumber = payload;
    }
  },
  actions: {}
});
