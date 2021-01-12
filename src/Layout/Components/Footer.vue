<template>
<div class="layout-page">
  <v-footer height="auto" color="primary lighten-1f">
    <v-layout justify-center row wrap>
      <v-btn to="problems" color="white" flat round> Ваши проблемы</v-btn>
      <v-btn to="trainings" color="white" flat round> Группы</v-btn>
      <v-btn to="trainings" color="white" flat round> ВЕБИНАРЫ</v-btn>
      <v-btn to="trainings" color="white" flat round> ВИДЕОУРОКИ</v-btn>
      <v-flex primary lighten-2f py-3 text-xs-center white--text xs12>
        &copy;2020 —
        <strong>4ancer</strong>
      </v-flex>
    </v-layout>
  </v-footer>
</div>
</template>

<script>
export default {
  name: "Footer",
  data: () => ({
    links: ["Home", "About Us", "Team", "Services", "Blog", "Contact Us"]
  })
};
</script>
