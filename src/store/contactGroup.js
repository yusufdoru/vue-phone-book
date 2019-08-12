const ContactGroupModel = {
  id: null,
  name: null,
  color: null
};

const state = {
  model: {
    ...ContactGroupModel
  },
  items: [
    {
      id: "20052019-0602-1508-Infinity-Infinity",
      name: "Family",
      color: "#F00000"
    }
  ]
};

export default {
  namespaced: true,
  state,
  mutations: {
    addContactGroup(state) {
      state.items = state.items.concat({ ...state.model });
      state.model = { ...ContactGroupModel };
    },
    editContactGroup(state, item) {
      state.model = item ? { ...item } : { ...ContactGroupModel };
    },
    updateContactGroup(state) {
      state.items = state.items.map(c => {
        if (state.model.id !== c.id) {
          return c;
        }

        return Object.assign({}, state.model);
      });

      state.model = { ...ContactGroupModel };
    },
    deleteContactGroup(state, payload) {
      state.items = state.items.filter(c => c.id !== payload.id);
    }
  }
};
