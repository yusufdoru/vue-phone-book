<template>
  <li>
    <div>
      <p class="name" :style="{ background: item.color }">
        {{ item.name }}
      </p>
    </div>
    <div class="actions">
      <button
        class="btn-mini"
        :class="{ warning: editMode }"
        @click="handleEditItem(item)"
      >
        {{ editMode ? "Cancel" : "Edit" }}
      </button>
      <button class="btn-mini danger" @click="handleDeleteItem(item)">
        Delete
      </button>
    </div>
  </li>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "ContactGroupListItem",
  components: {},
  props: ["item"],
  data() {
    return {};
  },
  computed: {
    ...mapState("contactGroup", {
      editMode(state) {
        return state.model.id === this.item.id;
      }
    })
  },
  methods: {
    ...mapMutations("contactGroup", ["editContactGroup", "deleteContactGroup"]),

    handleEditItem(item) {
      if (this.editMode) {
        this.editContactGroup(null);
      } else {
        this.editContactGroup(item);
      }
    },
    handleDeleteItem(item) {
      const isOkey = confirm("It will be removed? Are you sure?");

      if (isOkey) {
        this.deleteContactGroup(item);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.no-record {
  margin-bottom: 25px;
}
li {
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  margin: 15px 0;

  .name {
    border-radius: 10px;
    padding: 5px;
    background: gray;
  }

  .actions {
    display: flex;
    align-items: center;

    button {
      margin: 5px;
    }
  }

  p {
    margin: 10px 0;
  }
}

@media (min-width: 320px) and (max-width: 450px) {
  li {
    flex-direction: column;

    &:nth-of-type(odd) {
      padding-bottom: 10px;
      border-bottom: 1px solid gray;
    }

    label {
      flex-direction: column;
      align-items: stretch;
    }
    .title {
      margin-bottom: 15px;
    }
    .dot {
      display: none;
    }
    input {
    }
  }
}
</style>
