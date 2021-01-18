<template>
    <div class="main-card mb-3 card">
      <div class="card-header-tab card-header">
        <div class="card-header-title font-size-lg text-capitalize font-weight-normal">
          <i class="header-icon lnr-dice mr-3 text-muted opacity-6"></i>
            Дежные переводы
        </div>
        <div class="btn-actions-pane-right actions-icon-btn">
          <b-dropdown toggle-class="btn-icon btn-icon-only" variant="link" no-caret right>
            <span slot="button-content">
              <i class="pe-7s-menu btn-icon-wrapper"></i>
            </span>
            <div>
              <h6 tabindex="-1" class="dropdown-header">Header</h6>
              <button type="button" tabindex="0" class="dropdown-item">
                <i class="dropdown-icon lnr-inbox"></i>
                <span>Menus</span>
              </button>
              <button type="button" tabindex="0" class="dropdown-item">
                <i class="dropdown-icon lnr-file-empty"></i>
                <span>Settings</span>
              </button>
              <button type="button" tabindex="0" class="dropdown-item">
                <i class="dropdown-icon lnr-book"></i>
                <span>Actions</span>
              </button>
              <div tabindex="-1" class="dropdown-divider"></div>
              <div class="p-3 text-right">
                <button class="mr-2 btn-shadow btn-sm btn btn-link">View Details</button>
                <button class="mr-2 btn-shadow btn-sm btn btn-primary">Action</button>
              </div>
            </div>
          </b-dropdown>
        </div>
      </div>
      <div class="card-body">
        <v-server-table url="https://api.github.com/users/matfish2/repos" :columns="columns" :options="options"></v-server-table>
      </div>
    </div>
</template>

<script>
import Vue from "vue";
import { ServerTable } from "vue-tables-2";
window.axios = require("axios");
Vue.use(ServerTable);

export default {
  data() {
    return {
      dialog: false
    };
  }
};
</script>
