<template>
  <div>
    <h2>Contacts</h2>
    <div v-if="!contacts.length">No record(s) found.</div>
    <ul v-else class="contacts">
      <li v-for="(contact, index) in contacts" :key="index">
        <div>
          <p><b>Full Name:</b> {{ contact.fullName }}</p>
          <p><b>Phone Number:</b> {{ contact.phoneNumber }}</p>
          <p><b>Group:</b> {{ contact.group }}</p>
        </div>
        <div class="actions">
          <button
            class="btn-mini"
            :class="{ warning: index === $store.state.editContactIndex }"
            @click="handleEditContact(index)"
          >
            {{ index === $store.state.editContactIndex ? "Cancel" : "Edit" }}
          </button>
          <button class="btn-mini danger" @click="handleDeleteContact(index)">
            Delete
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "Contacts",
  components: {},
  computed: {
    contacts() {
      return this.$store.state.contacts;
    },
    contactGroups() {
      return this.$store.state.contactGroups;
    },
    editContactIndex() {
      return this.$store.state.editContactIndex;
    }
  },
  methods: {
    ...mapMutations(["editContact", "deleteContact"]),
    handleEditContact(index) {
      index = this.editContactIndex === index ? -1 : index;
      this.editContact(index);
    },
    handleDeleteContact(index) {
      const isOkey = confirm("It will be removed? Are you sure?");

      if (isOkey) {
        this.deleteContact(index);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.contacts {
  li {
    display: flex;
    justify-content: space-between;
    list-style: none;
    border: 1px solid lightgray;
    border-radius: 15px;
    padding: 15px;
    margin: 15px 0;

    .actions {
      display: flex;
      flex-direction: column;

      button {
        margin: 5px 0;
      }
    }

    p {
      margin: 10px 0;
    }
  }
}
</style>
