<template>
  <div>
    <form class="contact-group-form" @submit.prevent="onSubmitForm()">
      <label>
        <span class="title">Group Name</span>
        <span class="dot">:</span>
        <input
          v-model="$store.state.contactGroup.name"
          placeholder=""
          required
        />
      </label>
      <label>
        <span class="title">Group Color</span>
        <span class="dot">:</span>
        <input
          v-model="$store.state.contactGroup.color"
          type="color"
          placeholder="Group Color"
          required
        />
      </label>

      <div class="actions">
        <button
          v-if="editMode"
          type="button"
          class="cancel-btn warning"
          @click="clear()"
        >
          Cancel
        </button>
        <button type="submit">{{ editMode ? "Update" : "Add" }} Group</button>
      </div>
    </form>
  </div>
</template>

<script>
import { createId } from "@/helpers";
import { mapMutations, mapState } from "vuex";

export default {
  name: "ContactGroupForm",
  components: {},
  props: [],
  data() {
    return {};
  },
  computed: {
    ...mapState({
      groupId: state => state.contactGroup.id,
      name: state => state.contactGroup.name,
      color: state => state.contactGroup.color,
      editMode: state => !!state.contactGroup.id
    })
  },
  methods: {
    ...mapMutations(["addContactGroup", "updateContactGroup"]),
    clear() {
      this.name = "";
      this.color = "";
    },
    onSubmitForm() {
      const { name, color } = this;

      if (this.editMode) {
        this.updateContactGroup({ id: this.groupId, name, color });
      } else {
        const id = createId();
        const record = { id, name, color };
        this.addContactGroup(record);
      }
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
