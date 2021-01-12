<template>
  <div class="header-dots">
   <b-dropdown toggle-class="p-0 mr-2" variant="link" no-caret right>
      <span slot="button-content">
        <div class="icon-wrapper icon-wrapper-alt rounded-circle">
          <div class="icon-wrapper-bg bg-focus"></div>
          <div class="language-icon">
            <country-flag country="DE" class="opacity-8" />
          </div>
        </div>
      </span>
      <div class="dropdown-menu-header">
        <div class="dropdown-menu-header-inner pt-4 pb-4 bg-focus">
          <div class="menu-header-image opacity-05 dd-header-bg-4"></div>
          <div class="menu-header-content text-center text-white">
            <h6 class="menu-header-subtitle mt-0"> Choose Language </h6>
          </div>
        </div>
      </div>
      <h6 tabindex="-1" class="dropdown-header">Popular Languages</h6>
      <button type="button" tabindex="0" class="dropdown-item">
        <country-flag country="US" class="mr-3 opacity-8 flag-align" />
        <span>USA</span>
      </button>
      <button type="button" tabindex="0" class="dropdown-item">
        <country-flag country="CH" class="mr-3 opacity-8 flag-align" />
        <span>Switzerland</span>
      </button>
      <button type="button" tabindex="0" class="dropdown-item">
        <country-flag country="FR" class="mr-3 opacity-8 flag-align" />
        <span>France</span>
      </button>
      <button type="button" tabindex="0" class="dropdown-item">
        <country-flag country="ES" class="mr-3 opacity-8 flag-align" />
        <span>Spain</span>
      </button>
      <div tabindex="-1" class="dropdown-divider"></div>
      <h6 tabindex="-1" class="dropdown-header">Others</h6>
      <button type="button" tabindex="0" class="dropdown-item active">
        <country-flag country="DE" class="mr-3 opacity-8 flag-align" />
        <span>Germany</span>
      </button>
      <button type="button" tabindex="0" class="dropdown-item">
        <country-flag country="IT" class="mr-3 opacity-8 flag-align" />
        <span>Italy</span>
      </button>
    </b-dropdown>
<!--
    <b-dropdown toggle-class="p-0" menu-class="dropdown-menu-xl" variant="link" no-caret right>
      <span slot="button-content">
        <div class="icon-wrapper icon-wrapper-alt rounded-circle">
          <div class="icon-wrapper-bg bg-success"></div>
          <i class="lnr-pie-chart text-success"></i>
        </div>
      </span>
      <div class="dropdown-menu-header">
        <div class="dropdown-menu-header-inner bg-premium-dark">
          <div class="menu-header-image dd-header-bg-7"></div>
          <div class="menu-header-content text-white">
            <h5 class="menu-header-title">Users Online</h5>
            <h6 class="menu-header-subtitle">Recent Account Activity Overview</h6>
          </div>
        </div>
      </div>
      <div class="widget-chart">
        <div class="widget-chart-content">
          <div class="icon-wrapper rounded-circle">
            <div class="icon-wrapper-bg opacity-9 bg-focus"></div>
            <i class="lnr-users text-white"></i>
          </div>
          <div class="widget-numbers">
            <span>344k</span>
          </div>
          <div class="widget-subheading pt-2">Profile views since last login</div>
          <div class="widget-description text-danger">
            <span class="pr-1">
              <span>176%</span>
            </span>
            <font-awesome-icon class="ml-1" icon="arrow-up" />
          </div>
        </div>
      </div>
      <ul class="nav flex-column">
        <li class="nav-item-divider mt-0 nav-item"></li>
        <li class="nav-item-btn text-center nav-item">
          <button class="btn-shine btn-wide btn-pill btn btn-warning btn-sm">
            <font-awesome-icon class="mr-2" icon="cog" />Refresh List
          </button>
        </li>
      </ul>
    </b-dropdown>
    -->
  </div>
</template>

<script>

import CountryFlag from "vue-country-flag";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowUp, faCog } from "@fortawesome/free-solid-svg-icons";


library.add(faArrowUp, faCog);

export default {
  components: {
    CountryFlag,
  },
  data: () => ({}),
  methods: {}
};
</script>

