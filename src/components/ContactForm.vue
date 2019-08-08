<template>
  <form class="contact-form" @submit.prevent="onSubmitForm()">
    <label>
      <span class="title">Full Name</span>
      <span class="dot">:</span>
      <Input v-model="fullName" placeholder="Name Surname" required />
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
  computed: {
    fullName: {
      get() {
        return this.$store.state.contact.fullName;
      },
      set(newValue) {
        this.$store.commit("SET_FULL_NAME", newValue);
      }
    },
    phoneNumber: {
      get() {
        return this.$store.state.contact.phoneNumber;
      },
      set(newValue) {
        this.$store.commit("SET_PHONE_NUMBER", newValue);
      }
    }
  },
  methods: {
    onSubmitForm() {
      if (this.phoneNumber.length !== 19) {
        return;
      }

      this.$store.commit("ADD_CONTACT");
      this.$store.commit("SET_FULL_NAME", "");
      this.$store.commit("SET_PHONE_NUMBER", "");
    }
  }
};
</script>

<style lang="scss" scoped>
.contact-form {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-bottom: 15px;

  label {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
  }
  .title {
    flex: 0.6;
  }
  .dot {
    flex: 0.1;
  }
  input {
    flex: 0.9;
  }
}
</style>
