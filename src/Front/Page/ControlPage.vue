<template>
      
      <div>
        <page-title :heading="heading" :subheading="subheading" :icon="icon"></page-title>

        <userlist/>


      </div>

</template>

<script>
import PageTitle from "../../Layout/Components/PageTitle.vue";

import userlist from "../Components/UserList"


export default {
  components: {
    PageTitle,
    userlist
  },
  data: () => ({
    heading: "Панель администратора",
    subheading:
      "",
    icon: "pe-7s-notebook icon-gradient bg-mixed-hopes",
  
  }),
  
};
</script>
