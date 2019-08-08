<template>
  <div class="home">
    <div class="left">
      <h2>Contact Groups</h2>
    </div>
    <div class="content">
      <ul class="contacts">
        <li v-for="(contact, key) in contacts" :key="key">
          <p>Full Name: {{ contact.fullName }}</p>
          <p>Phone Number: {{ contact.phoneNumber }}</p>
        </li>
      </ul>
    </div>
    <div class="right">
      <h2>Add / Update Contact Form</h2>
      <ContactForm />
    </div>
  </div>
</template>

<script>
import ContactForm from "@/components/ContactForm";

export default {
  name: "home",
  components: {
    ContactForm
  },
  data() {
    return {};
  },
  computed: {
    contacts() {
      return this.$store.state.contacts;
    }
  }
};
</script>

<style lang="scss">
.home {
  display: flex;
  justify-content: space-between;

  > div {
    background: #353535;
    border-radius: 15px;
    padding: 15px;
  }
  .left {
    flex: 1;
  }
  .content {
    flex: 2;
    margin: 0 15px;
  }
  .right {
    flex: 1;
  }
}
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
