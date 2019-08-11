<template>
  <div>
    <h2>Contact Groups</h2>
    <div v-if="!contactGroups.length" class="no-record">
      No record(s) found.
    </div>
    <ul v-else class="contact-groups">
      <ContactGroupListItem
        v-for="(item, index) in contactGroups"
        :key="index"
        :item="item"
      ></ContactGroupListItem>
    </ul>
    <ContactGroupForm></ContactGroupForm>
  </div>
</template>

<script>
import ContactGroupForm from "./Form";
import ContactGroupListItem from "./Item";

import { mapState } from "vuex";

export default {
  name: "ContactGroups",
  components: { ContactGroupForm, ContactGroupListItem },
  data() {
    return {};
  },
  computed: {
    ...mapState("contactGroup", {
      contactGroups: state => state.items
    })
  },
  methods: {}
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
