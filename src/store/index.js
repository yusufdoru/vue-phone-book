import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    editContactIndex: -1,
    contacts: [
      {
        fullName: "Yusuf Doru",
        phoneNumber: "+90 (530) 555 66 77",
        group: "20052019-0602-1508-Infinity-Infinity"
      }
    ],
    contactGroups: [
      {
        id: "20052019-0602-1508-Infinity-Infinity",
        name: "Family",
        color: "red"
      }
    ],
    contact: {
      fullName: "",
      phoneNumber: "",
      group: null
    }
  },
  mutations: {
    addContactGroup(state, payload) {
      state.contactGroups.push({ ...payload });
    },
    updateContactGroup(state, payload) {
      state.contactGroups = state.contactGroups.map(c => {
        if (payload.id === c.id) {
          return Object.assign({}, payload);
        }
        return c;
      });
    },
    deleteContactGroup(state, payload) {
      state.contactGroups = state.contactGroups.filter(
        c => c.id !== payload.id
      );
    },
    addContact(state) {
      state.contacts.push({ ...state.contact });
    },
    editContact(state, index) {
      state.editContactIndex = index;

      if (index !== -1) {
        const { fullName, phoneNumber, group } = state.contacts[index];

        state.contact = { fullName, phoneNumber, group };
      } else {
        state.contact = { fullName: "", phoneNumber: "", group: null };
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
    },
    setGroup(state, payload) {
      state.contact.group = payload;
    }
  },
  actions: {}
});
