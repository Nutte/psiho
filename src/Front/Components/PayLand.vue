<template>
  <div class="text-xs-right">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on }">
        <button class="btn-shadow-primary btn btn-primary btn-lg" v-on="on">Записаться</button>
      </template>

      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>Приобрести доступ к курсу</v-card-title>

        <v-card-text>
            <div class="card mb-3 widget-content">
          <div class="widget-content-wrapper">
            <div class="widget-content-left">
              <div class="widget-heading">ЧТО ТАКОЕ ЛЮБОВЬ И КАК ОТ НЕЕ НЕ МУЧИТЬСЯ</div>
              <div class="widget-subheading">2020-11-21 18:00</div>
            </div>
            <div class="widget-content-right">
              <div class="widget-numbers text-primary">
                <span>$ 568</span>
              </div>
            </div>
          </div>
        </div>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" flat @click="dialog = false">Купить</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false
    };
  }
};
</script>
