<template>
  <div>
    <form class="contact-group-form" @submit.prevent="onSubmitForm()">
      <label>
        <span class="title">Group Name</span>
        <span class="dot">:</span>
        <input v-model="contactGroup.name" placeholder="" required />
      </label>
      <label>
        <span class="title">Group Color</span>
        <span class="dot">:</span>
        <input
          v-model="contactGroup.color"
          type="color"
          placeholder="Group Color"
          required
        />
      </label>

      <div class="actions">
        <button
          v-if="editMode"
          type="button"
          class="cancel-btn warning"
          @click="editContactGroup(-1)"
        >
          Cancel
        </button>
        <button type="submit">{{ editMode ? "Update" : "Add" }} Group</button>
      </div>
    </form>
  </div>
</template>

<script>
import { createId } from "@/helpers";
import { mapMutations, mapState } from "vuex";

export default {
  name: "ContactGroupForm",
  components: {},
  props: [],
  data() {
    return {};
  },
  computed: {
    ...mapState("contactGroup", {
      contactGroup: state => state.model,
      editMode: state => !!state.model.id
    })
  },
  methods: {
    ...mapMutations("contactGroup", [
      "addContactGroup",
      "editContactGroup",
      "updateContactGroup"
    ]),
    onSubmitForm() {
      if (this.editMode) {
        this.updateContactGroup();
      } else {
        this.contactGroup.id = createId();
        this.addContactGroup();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.contact-group-form {
}
@media (min-width: 320px) and (max-width: 450px) {
  .contact-group-form {
  }
}
</style>
