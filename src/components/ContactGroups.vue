<template>
  <div>
    <h2>Contact Groups</h2>
    <div v-if="!items.length" class="no-record">No record(s) found.</div>
    <ul v-else class="contact-groups">
      <li v-for="(item, index) in items" :key="index">
        <div>
          <p :style="{ background: item.color }" class="name">
            {{ item.name }}
          </p>
        </div>
        <div class="actions">
          <button
            class="btn-mini"
            :class="{ warning: item.id === editId }"
            @click="handleEditItem(item)"
          >
            {{ item.id === editId ? "Cancel" : "Edit" }}
          </button>
          <button class="btn-mini danger" @click="handleDeleteItem(item)">
            Delete
          </button>
        </div>
      </li>
    </ul>
    <ContactGroupForm
      :contact-group="contactGroup"
      @cancel="handleCancel($event)"
      @submit="handleSubmit($event)"
    ></ContactGroupForm>
  </div>
</template>

<script>
import ContactGroupForm from "@/components/ContactGroupForm";
import { mapMutations } from "vuex";

export default {
  name: "ContactGroups",
  components: { ContactGroupForm },
  data() {
    return { contactGroup: null };
  },
  computed: {
    editId() {
      return this.contactGroup && this.contactGroup.id;
    },
    items() {
      return this.$store.state.contactGroups;
    }
  },
  methods: {
    ...mapMutations(["deleteContactGroup"]),

    handleCancel() {
      this.contactGroup = null;
    },
    handleSubmit() {
      this.contactGroup = null;
    },
    handleEditItem(item) {
      if (this.contactGroup) {
        this.contactGroup = null;
      } else {
        this.contactGroup = item;
      }
    },
    handleDeleteItem(item) {
      const isOkey = confirm("It will be removed? Are you sure?");

      if (isOkey) {
        this.deleteContactGroup(item);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.no-record {
  margin-bottom: 25px;
}
.contact-groups {
  margin-bottom: 25px;
  li {
    display: flex;
    justify-content: space-between;
    list-style: none;
    border-radius: 15px;
    padding: 0px;
    margin: 15px 0;

    .name[style] {
      padding: 5px;
      border-radius: 10px;
    }

    .actions {
      display: flex;

      button {
        margin: 5px;
      }
    }

    p {
      margin: 10px 0;
    }
  }
}
</style>
