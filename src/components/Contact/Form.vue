<template>
  <div>
    <h2>{{ editMode ? "Update" : "Add" }} Contact Form</h2>
    <form class="contact-form" @submit.prevent="onSubmitForm()">
      <label>
        <span class="title">Full Name</span>
        <span class="dot">:</span>
        <input v-model="contact.fullName" placeholder="Name Surname" required />
      </label>
      <label>
        <span class="title">Phone Number</span>
        <span class="dot">:</span>
        <PhoneNumber v-model="contact.phoneNumber" required />
      </label>
      <label>
        <span class="title">Group</span>
        <span class="dot">:</span>
        <select v-model="contact.group">
          <option :value="null">Ungrouped</option>
          <option
            v-for="group in contactGroups"
            :value="group.id"
            :key="group.id"
          >
            {{ group.name }}
          </option>
        </select>
      </label>

      <div class="actions">
        <button
          v-if="editMode"
          type="button"
          class="cancel-btn warning"
          @click="editContact(null)"
        >
          Cancel
        </button>
        <button type="submit">{{ editMode ? "Update" : "Add" }} Contact</button>
      </div>
    </form>
  </div>
</template>

<script>
import PhoneNumber from "@/components/_shared/PhoneNumber";
import { createId } from "@/helpers";
import { mapState, mapMutations } from "vuex";

export default {
  name: "ContactForm",
  components: {
    PhoneNumber
  },
  computed: {
    ...mapState("contact", {
      contact: state => state.model,
      editMode: state => !!state.model.id
    }),
    ...mapState("contactGroup", {
      contactGroups: state => state.items
    })
  },
  methods: {
    ...mapMutations("contact", ["addContact", "editContact", "updateContact"]),
    onSubmitForm() {
      if (this.contact.phoneNumber.length !== 19) {
        return;
      }

      if (this.editMode) {
        this.updateContact();
      } else {
        this.contact.id = createId();
        this.addContact();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.contact-form {
}
@media (min-width: 320px) and (max-width: 450px) {
  .contact-form {
  }
}
</style>
