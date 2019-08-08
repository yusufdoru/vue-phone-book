<template>
  <div class="contact-form">
    <label>
      <span class="title">Full Name</span>
      <span class="dot">:</span>
      <Input v-model="fullName" />
    </label>
    <label>
      <span class="title">Phone Number</span>
      <span class="dot">:</span>
      <PhoneNumber v-model="phoneNumber" />
    </label>
  </div>
</template>

<script>
import Input from "@/components/Input";
import PhoneNumber from "@/components/PhoneNumber";

export default {
  name: "ContactForm",
  components: {
    Input,
    PhoneNumber
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

<style scoped>
.contact-form {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
}
label {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}
.title {
  min-width: 150px;
  display: inline-block;
}
.dot {
  min-width: 30px;
}
</style>
