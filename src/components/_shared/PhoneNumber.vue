<template>
  <Input v-model="phoneNumber" />
</template>

<script>
import Input from "@/components/_shared/Input";

export default {
  name: "PhoneNumber",
  components: {
    Input
  },
  data() {
    return {
      phoneNumber: ""
    };
  },
  watch: {
    phoneNumber() {
      this.$store.commit("setPhoneNumber", this.phoneNumber);
    }
  },
  methods: {}
};
</script>

<style scoped></style>
