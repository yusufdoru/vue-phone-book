<template>
  <div class="home">
    <div class="contact-form-container">
      <label>
        <span>Full Name:</span>
        <Input v-model="fullName" />
      </label>
      <label>
        <span>Phone Number:</span>
        <PhoneNumber v-model="phoneNumber" />
      </label>
    </div>
    <div class="separator"></div>
    <h4>Full Name: {{ fullName }}</h4>
    <h4>Phone Number: {{ phoneNumber }}</h4>
  </div>
</template>

<script>
import Input from "@/components/Input";
import PhoneNumber from "@/components/PhoneNumber";

export default {
  name: "home",
  components: {
    Input,
    PhoneNumber
  },
  data() {
    return {};
  },
  computed: {
    fullName: {
      get() {
        return this.$store.state.fullName;
      },
      set(value) {
        this.$store.commit("setFullName", value);
      }
    },
    phoneNumber() {
      return this.$store.state.phoneNumber;
    }
  }
};
</script>

<style>
.contact-form-container {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
}
label {
  margin-bottom: 15px;
}
span {
  display: inline-block;
  min-width: 150px;
}
</style>
