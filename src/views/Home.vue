<template>
  <div class="home">
    <ContactForm />
    <div class="separator"></div>
    <div v-for="(contact, key) in contacts" :key="key">
      {{ contact.fullName }}<br />
      {{ contact.phoneNumber }}<br />
      <hr />
    </div>
  </div>
</template>

<script>
import ContactForm from "@/components/ContactForm";

export default {
  name: "home",
  components: {
    ContactForm
  },
  data() {
    return {};
  },
  computed: {
    contacts() {
      return this.$store.state.contacts;
    }
  }
};
</script>

<style></style>
