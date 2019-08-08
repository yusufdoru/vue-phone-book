<template>
  <div class="home">
    <ContactForm />
    <div class="separator"></div>
    <h4>Full Name: {{ fullName }}</h4>
    <h4>Phone Number: {{ phoneNumber }}</h4>
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
    fullName() {
      return this.$store.state.fullName;
    },
    phoneNumber() {
      return this.$store.state.phoneNumber;
    }
  }
};
</script>

<style></style>
