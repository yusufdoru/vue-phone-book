import Vue from "vue";
import Vuex from "vuex";

import contactModule from "./contact";
import contactGroupModule from "./contactGroup";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    contact: contactModule,
    contactGroup: contactGroupModule
  }
});
