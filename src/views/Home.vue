<template>
  <div class="home">
    <div class="left">
      <ContactGroupList></ContactGroupList>
    </div>
    <div class="content">
      <ContactList></ContactList>
    </div>
    <div class="right">
      <ContactForm />
    </div>
  </div>
</template>

<script>
import ContactList from "@/components/Contact/List";
import ContactForm from "@/components/Contact/Form";
import ContactGroupList from "@/components/ContactGroup/List";

import "./home.scss";

export default {
  name: "home",
  components: {
    ContactList,
    ContactGroupList,
    ContactForm
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss"></style>
