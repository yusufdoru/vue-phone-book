<template>
  <li>
    <div>
      <p><b>Full Name:</b> {{ item.fullName }}</p>
      <p><b>Phone Number:</b> {{ item.phoneNumber }}</p>
      <p>
        <b>Group:</b>&nbsp;
        <span class="group-name" :style="groupColor">{{ groupName }}</span>
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
  name: "ContactListItem",
  components: {},
  props: ["item"],
  data() {
    return {};
  },
  computed: {
    ...mapState("contact", {
      editMode(state) {
        return state.model.id === this.item.id;
      }
    }),
    ...mapState("contactGroup", {
      contactGroups: state => state.items
    }),
    group() {
      return this.contactGroups.find(c => c.id === this.item.group);
    },
    groupName() {
      return this.group ? this.group.name : "Ungrouped";
    },
    groupColor() {
      return { background: this.group ? this.group.color : null };
    }
  },
  methods: {
    ...mapMutations("contact", ["editContact", "deleteContact"]),

    handleEditItem(item) {
      if (this.editMode) {
        this.editContact(null);
      } else {
        this.editContact(item);
      }
    },
    handleDeleteItem(item) {
      const isOkey = confirm("It will be removed? Are you sure?");

      if (isOkey) {
        this.deleteContact(item);
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
  border-radius: 15px;
  padding: 0px;
  margin: 15px 0;

  .group-name {
    background: gray;
    padding: 5px;
    border-radius: 10px;
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
</style>
