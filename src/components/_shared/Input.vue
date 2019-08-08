<template>
  <input type="text" v-model="val" />
</template>

<script>
export default {
  name: "Input",
  props: ["value"],
  computed: {
    val: {
      get() {
        return this.value;
      },
      set(newValue) {
        this.$emit("input", newValue);
      }
    }
  }
};
</script>

<style scoped></style>
