<template>
  <form class="contact-form" @submit.prevent="onSubmitForm()">
    <label>
      <span class="title">Full Name</span>
      <span class="dot">:</span>
      <Input v-model="fullName" required />
    </label>
    <label>
      <span class="title">Phone Number</span>
      <span class="dot">:</span>
      <PhoneNumber v-model="phoneNumber" required />
    </label>

    <button type="submit">Add Contact</button>
  </form>
</template>

<script>
import Input from "@/components/_shared/Input";
import PhoneNumber from "@/components/_shared/PhoneNumber";

export default {
  name: "ContactForm",
  components: {
    Input,
    PhoneNumber
  },
  data() {
    return {
      fullName: "",
      phoneNumber: ""
    };
  },
  methods: {
    onSubmitForm() {
      this.$store.commit("addContact", {
        fullName: this.fullName,
        phoneNumber: this.phoneNumber
      });

      this.fullName = "";
      this.phoneNumber = "";
    }
  }
};
</script>

<style scoped>
.contact-form {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  width: 350px;
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
