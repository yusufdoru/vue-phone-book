import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    editContactIndex: -1,
    contacts: [
      {
        fullName: "Yusuf Doru",
        phoneNumber: "+90 (530) 555 66 77"
      }
    ],
    contactsGroups: [],
    contact: {
      fullName: "",
      phoneNumber: ""
    }
  },
  mutations: {
    addContact(state) {
      state.contacts.push({ ...state.contact });
    },
    editContact(state, index) {
      state.editContactIndex = index;

      if (index !== -1) {
        const { fullName, phoneNumber } = state.contacts[index];

        state.contact = { fullName, phoneNumber };
      } else {
        state.contact = { fullName: "", phoneNumber: "" };
      }
    },
    updateContact(state) {
      state.contacts = state.contacts.map((c, i) => {
        if (state.editContactIndex === i) {
          return Object.assign({}, state.contact);
        }

        return c;
      });

      state.editContactIndex = -1;
    },
    deleteContact(state, index) {
      state.contacts.splice(index, 1);
    },
    setFullName(state, payload) {
      state.contact.fullName = payload;
    },
    setPhoneNumber(state, payload) {
      state.contact.phoneNumber = payload;
    }
  },
  actions: {}
});
