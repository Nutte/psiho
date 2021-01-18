<template>
        <b-card title="Cписок пользователей" class="main-card mb-4">
          <b-row>
            <b-col md="6" class="my-1">
              <b-form-group horizontal label="Поиск" class="mb-0">
                <b-input-group>
                  <b-form-input v-model="filter" placeholder="Ввести" />
                  <b-input-group-append>
                    <b-btn :disabled="!filter" @click="filter = ''">Clear</b-btn>
                  </b-input-group-append>
                </b-input-group>
              </b-form-group>
            </b-col>
          </b-row>
          <br>
          <!-- Main table element -->
          <b-table show-empty stacked="md" :items="items" :fields="fields" :current-page="currentPage"
            :per-page="perPage" :filter="filter" :sort-by.sync="sortBy" :sort-desc.sync="sortDesc"
            :sort-direction="sortDirection"  @filtered="onFiltered" >

            <template slot="name" slot-scope="row">{{row.value.first}} {{row.value.last}}</template>
            <template slot="isActive" slot-scope="row">{{row.value?'Yes :)':'No :('}}</template>
            <template slot="actions" slot-scope="row">
              <!-- We use @click.stop here to prevent a 'row-clicked' event from also happening -->
              <b-button size="sm"  @click.stop="row.toggleDetails">{{ row.detailsShowing ? 'Hide' : 'Show' }} Details</b-button>
            </template>
            <template slot="row-details" slot-scope="row">
              <b-card class="no-shadow">
                <ul class="list-group">
                  <li class="list-group-item" v-for="(value, key) in row.item" :key="key">{{ key }}: {{ value}}</li>
                </ul>
              </b-card>
            </template>
          </b-table>
          <b-row>
            <b-col md="6" class="my-1">
              <b-pagination :total-rows="totalRows" :per-page="perPage" v-model="currentPage" class="my-0" />
            </b-col>
          </b-row>
        </b-card>
</template>

<script>
const items = [
  {  role: "Психолог", status: "Провереный", name: "Евгений" },
  {  role: "Пользователь", status: "", name: "Артур" },
  {  role: "Психолог", status: "На проверке", name: "Антон", _cellVariants: { status: "danger"} },
  {  role: "Пользователь", status: "", name: "Аскольд" },
  {  role: "Психолог", status: "Провереный", name: "Евгений" },
  {  role: "Пользователь", status: "", name: "Артур" },
  {  role: "Психолог", status: "На проверке", name: "Антон", _cellVariants: { status: "danger"} },
  {  role: "Пользователь", status: "", name: "Аскольд" },
];

export default {
  data: () => ({

    items: items,
    fields: [
      {
        key: "name",
        label: "Ник пользователя",
        sortable: true,
        sortDirection: "desc"
      },
      { 
        key: "status", 
        label: "Статус", 
        sortable: true, 
        class: "text-center" 
      },
      { 
        key: "role", 
        label: "Роль",
        class: "text-right" 
      }
    ],
    currentPage: 1,
    perPage: 10,
    totalRows: items.length,
    sortBy: null,
    sortDesc: false,
    sortDirection: "asc",
    filter: null,
    modalInfo: { title: "", content: "" }
  }),

  computed: {
    sortOptions() {
      // Create an options list from our fields
      return this.fields
        .filter(f => f.sortable)
        .map(f => {
          return { text: f.label, value: f.key };
        });
    }
  },
  methods: {
    info(item, index, button) {
      this.modalInfo.title = `Row index: ${index}`;
      this.modalInfo.content = JSON.stringify(item, null, 2);
      this.$root.$emit("bv::show::modal", "modalInfo", button);
    },
    resetModal() {
      this.modalInfo.title = "";
      this.modalInfo.content = "";
    },
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    }
  }
};
</script>
