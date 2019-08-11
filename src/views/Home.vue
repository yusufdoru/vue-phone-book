<template>
  <div class="home">
    <div class="left">
      <ContactGroups></ContactGroups>
    </div>
    <div class="content">
      <Contacts></Contacts>
    </div>
    <div class="right">
      <ContactForm />
    </div>
  </div>
</template>

<script>
import Contacts from "@/components/Contacts";
import ContactGroups from "@/components/ContactGroups";
import ContactForm from "@/components/ContactForm";

export default {
  name: "home",
  components: {
    Contacts,
    ContactGroups,
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

@media only screen and (max-width: 799px) {
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

@media (min-width: 800px) and (max-width: 1024px) {
  .home {
    .left {
      order: 0;
      flex: 1 0 33.3%;
    }
    .content {
      order: 3;
      flex: 1 1 100%;
      margin: 0;
      margin-top: 25px;
    }
    .right {
      flex: 1 0 33.3%;
      order: 2;
      margin-left: 25px;
    }
  }
}
</style>
