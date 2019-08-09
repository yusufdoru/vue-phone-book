<template>
  <div>
    <h2>Contacts</h2>
    <ul class="contacts">
      <li v-for="(contact, key) in contacts" :key="key">
        <p>Full Name: {{ contact.fullName }}</p>
        <p>Phone Number: {{ contact.phoneNumber }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Contacts",
  components: {},
  computed: {
    contacts() {
      return this.$store.state.contacts;
    }
  }
};
</script>

<style lang="scss" scoped>
.contacts {
  li {
    list-style: none;
    border: 1px solid lightgray;
    border-radius: 15px;
    padding: 15px;
    margin: 15px 0;

    p {
      margin: 10px 0;
    }
  }
}
</style>
