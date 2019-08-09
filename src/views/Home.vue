<template>
  <div class="home">
    <div class="left">
      <h2>Contact Groups</h2>
    </div>
    <div class="content">
      <Contacts></Contacts>
      <ul class="contacts">
        <li v-for="(contact, key) in contacts" :key="key">
          <p>Full Name: {{ contact.fullName }}</p>
          <p>Phone Number: {{ contact.phoneNumber }}</p>
        </li>
      </ul>
    </div>
    <div class="right">
      <h2>Add Contact Form</h2>
      <ContactForm />
    </div>
  </div>
</template>

<script>
import Contacts from "@/components/Contacts";
import ContactForm from "@/components/ContactForm";

export default {
  name: "home",
  components: {
    Contacts,
    ContactForm
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss">
.home {
  display: flex;
  flex-wrap: wrap;
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
    margin: 0 25px;
  }
  .right {
    flex: 1;
  }
}

@media screen and (max-width: 900px) {
  .home {
    flex-direction: column;
    > div {
      margin-bottom: 25px;
    }
    .left {
    }
    .content {
      flex: 1;
      margin: 0;
      margin-bottom: 25px;
    }
    .right {
    }
  }
}
</style>
