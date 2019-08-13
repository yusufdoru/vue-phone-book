<template>
  <div class="contact-groups-container">
    <h2>Contact Groups</h2>
    <div v-if="!contactGroups.length" class="no-record">
      No group(s) found.
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
.contact-groups {
}
</style>
