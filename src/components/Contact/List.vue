<template>
  <div>
    <h2>Contacts</h2>
    <div v-if="!contacts.length">No record(s) found.</div>
    <ul v-else class="contacts">
      <ContactListItem
        v-for="(contact, index) in contacts"
        :key="index"
        :item="contact"
      ></ContactListItem>
    </ul>
  </div>
</template>

<script>
import ContactListItem from "./Item";

import { mapState } from "vuex";

export default {
  name: "Contacts",
  components: { ContactListItem },
  computed: {
    ...mapState("contact", {
      contacts: state => state.items
    })
  },
  methods: {}
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
