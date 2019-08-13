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
      this.editContactGroup(this.editMode ? null : item);
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

<style lang="scss" scoped></style>
