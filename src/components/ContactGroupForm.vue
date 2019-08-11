<template>
  <div>
    <form class="contact-group-form" @submit.prevent="onSubmitForm()">
      <label>
        <span class="title">Group Name</span>
        <span class="dot">:</span>
        <input v-model="name" placeholder="" required />
      </label>
      <label>
        <span class="title">Group Color</span>
        <span class="dot">:</span>
        <input
          v-model="color"
          type="color"
          placeholder="Group Color"
          required
        />
      </label>

      <div class="actions">
        <button
          v-if="contactGroup"
          type="button"
          class="cancel-btn warning"
          @click="cancel()"
        >
          Cancel
        </button>
        <button type="submit">
          {{ contactGroup ? "Update" : "Add" }} Group
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { createId } from "@/helpers";
import { mapMutations } from "vuex";

export default {
  name: "ContactGroupForm",
  components: {},
  props: ["contactGroup"],
  data() {
    return {
      name: "",
      color: ""
    };
  },
  watch: {
    contactGroup(val) {
      if (val) {
        this.name = val.name;
        this.color = val.color;
      }
    }
  },
  computed: {
    items() {
      return this.$store.state.contactGroups;
    }
  },
  methods: {
    ...mapMutations(["addContactGroup", "updateContactGroup"]),
    cancel() {
      this.clear();
      this.$emit("cancel", this.contactGroup);
    },
    clear() {
      this.name = "";
      this.color = "";
    },
    onSubmitForm() {
      const { name, color } = this;

      if (this.contactGroup) {
        const record = {
          id: this.contactGroup.id,
          name,
          color
        };

        this.updateContactGroup(record);
        this.clear();
        this.$emit("submit", record);
      } else {
        const id = createId();

        const record = { id, name, color };

        this.addContactGroup(record);
        this.$emit("submit", record);
      }

      this.name = "";
      this.color = "";
    }
  }
};
</script>

<style lang="scss" scoped>
.contact-group-form {
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
