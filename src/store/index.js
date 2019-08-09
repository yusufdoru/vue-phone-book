import Vue from "vue";
import Vuex from "vuex";
import { ADD_CONTACT, SET_FULL_NAME, SET_PHONE_NUMBER } from "./mutation-types";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    contacts: [],
    contactsGroups: [],
    contact: {
      fullName: "",
      phoneNumber: ""
    }
  },
  mutations: {
    [ADD_CONTACT](state) {
      state.contacts.push({ ...state.contact });
    },
    [SET_FULL_NAME](state, payload) {
      state.contact.fullName = payload;
    },
    [SET_PHONE_NUMBER](state, payload) {
      state.contact.phoneNumber = payload;
    }
  },
  actions: {}
});
