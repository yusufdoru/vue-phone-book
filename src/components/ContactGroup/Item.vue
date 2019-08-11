<template>
  <li>
    <div>
      <p :style="{ background: item.color }" class="name">
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
import { mapMutations } from "vuex";

export default {
  name: "ContactGroupListItem",
  components: {},
  props: ["item"],
  data() {
    return {};
  },
  computed: {
    editMode() {
      const group = this.$store.state.contactGroup;

      return this.item.id === group.id;
    }
  },
  methods: {
    ...mapMutations(["editContactGroup", "deleteContactGroup"]),

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
.contact-groups {
  margin-bottom: 25px;
  li {
    display: flex;
    justify-content: space-between;
    list-style: none;
    border-radius: 15px;
    padding: 0px;
    margin: 15px 0;

    .name[style] {
      padding: 5px;
      border-radius: 10px;
    }

    .actions {
      display: flex;

      button {
        margin: 5px;
      }
    }

    p {
      margin: 10px 0;
    }
  }
}
</style>
