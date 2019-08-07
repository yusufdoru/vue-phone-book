<template>
  <div class="home">
    <div class="contact-form-container">
      <label> <span>Full Name:</span> <input v-model="fullName" /> </label>
      <label>
        <span>Phone Number:</span>
        <PhoneNumber v-model="phoneNumber" />
      </label>
    </div>
    <div class="separator"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import PhoneNumber from "@/components/PhoneNumber";

export default {
  name: "home",
  components: {
    PhoneNumber
  },
  data() {
    return {
      fullName: "",
      phoneNumber: ""
    };
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
