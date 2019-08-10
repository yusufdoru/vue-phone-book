<template>
  <div>
    <h2>{{ editMode ? "Update" : "Add" }} Contact Form</h2>
    <form class="contact-form" @submit.prevent="onSubmitForm()">
      <label>
        <span class="title">Full Name</span>
        <span class="dot">:</span>
        <input v-model="fullName" placeholder="Name Surname" required />
      </label>
      <label>
        <span class="title">Phone Number</span>
        <span class="dot">:</span>
        <PhoneNumber v-model="phoneNumber" required />
      </label>

      <div class="actions">
        <button
          v-if="editMode"
          type="button"
          class="cancel-btn warning"
          @click="editContact(-1)"
        >
          Cancel
        </button>
        <button type="submit">{{ editMode ? "Update" : "Add" }} Contact</button>
      </div>
    </form>
  </div>
</template>

<script>
import PhoneNumber from "@/components/_shared/PhoneNumber";
import { mapMutations } from "vuex";

export default {
  name: "ContactForm",
  components: {
    PhoneNumber
  },

  computed: {
    editMode() {
      return this.$store.state.editContactIndex !== -1;
    },
    fullName: {
      get() {
        return this.$store.state.contact.fullName;
      },
      set(newValue) {
        this.setFullName(newValue);
      }
    },
    phoneNumber: {
      get() {
        return this.$store.state.contact.phoneNumber;
      },
      set(newValue) {
        this.setPhoneNumber(newValue);
      }
    }
  },
  methods: {
    ...mapMutations([
      "setFullName",
      "setPhoneNumber",
      "addContact",
      "editContact",
      "updateContact"
    ]),
    onSubmitForm() {
      if (this.phoneNumber.length !== 19) {
        return;
      }

      if (this.editContactIndex !== -1) {
        this.updateContact();
      } else {
        this.addContact();
      }

      this.setFullName("");
      this.setPhoneNumber("");
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
    min-width: 110px;
  }
  .dot {
    flex: 0.1;
  }
  input {
    flex: 0.9;
  }
}
.actions {
  display: flex;

  button {
    flex: 1;
  }
}
@media (min-width: 320px) and (max-width: 450px) {
  .contact-form {
    label {
      flex-direction: column;
      align-items: stretch;
    }
    .title {
      margin-bottom: 15px;
    }
    .dot {
      display: none;
    }
    input {
    }
  }
}
</style>
