<template>
  <the-mask
    v-model="phoneNumber"
    mask="+## (###) ### ## ##"
    :masked="true"
    placeholder="+90 (000) 000 000 00"
  ></the-mask>
</template>

<script>
export default {
  name: "PhoneNumber",
  components: {},
  props: ["value"],
  data() {
    return {};
  },
  computed: {
    phoneNumber: {
      get() {
        return this.value;
      },
      set(newValue) {
        this.$emit("input", newValue);
      }
    }
  },
  methods: {}
};
</script>

<style scoped></style>
