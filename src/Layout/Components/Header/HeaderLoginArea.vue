<template>
  <div class="d-flex">
    <div class="header-btn-lg pr-0">
      <div class="widget-content p-0">
        <div class="widget-content-wrapper">
          <div class="widget-content-right header-user-info ml-3">
            <b-btn v-b-tooltip.hover title="Регистрация"
              class="btn-shadow p-1" size="sm" variant="info" to="/Register">
              <font-awesome-icon icon="edit" class="mr-1 ml-1" />
            </b-btn>
          </div>
          <div class="widget-content-right header-user-info ml-3">
            <b-btn v-b-tooltip.hover title="Вход"
              class="btn-shadow p-1" size="sm" variant="info" to="/login">
              <font-awesome-icon icon="sign-in-alt" class="mr-1 ml-1" />
            </b-btn>
          </div>
          <div class="widget-content-left ml-3 header-user-info">
            <div class="widget-heading"><a href="tel:0800336126"> 0 800 336 126</a></div>
            <div class="widget-subheading">ГОРЯЧАЯ ЛИНИЯ</div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faEdit,
  faSignInAlt,
  
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faEdit,
  faSignInAlt,
);

export default {
  components: {
    "font-awesome-icon": FontAwesomeIcon,
  },
  data: () => ({

    showDrawerSection: false
  }),

  methods: {}
};
</script>
