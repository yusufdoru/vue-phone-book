<template>
  <input type="text" @input="$emit('input', $event.target.value)" />
</template>

<script>
export default {
  name: "Input"
};
</script>

<style scoped>
input {
  outline: none;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid darkgray;
  color: white;
  background: #141414;
}
</style>
