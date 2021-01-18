<template>
  <div class=" layout-page">
    <page-title :heading="heading" :subheading="subheading" :icon="icon"></page-title>
    
    <div class="row">
      <div class="col-md-12 col-lg-6 col-xl-4">
        <div class="card-shadow-primary profile-responsive card-border mb-3 card">
          <div class="dropdown-menu-header">
            <div class="dropdown-menu-header-inner bg-info">
              <div class="menu-header-image opacity-2"
                style="background-image: url('assets/images/dropdown-header/abstract1.jpg')">
              </div>
              <div class="menu-header-content btn-pane-right">
                <div class="avatar-icon-wrapper mr-2 avatar-icon-xl">
                  <div class="avatar-icon rounded">
                    <img src="@/assets/images/avatars/7.jpg" alt="Avatar 5" />
                  </div>
                </div>
                <div>
                  <h5 class="menu-header-title">Aliesha Hunter</h5>
                </div>
                <div class="menu-header-btn-pane">
                  <div>
                    <div role="group" class="btn-group text-center">
                      <div class="nav">
                        <a href="#tab-example-161" data-toggle="tab" class="btn btn-focus mr-1">Action</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="tab-content">
            <div class="tab-pane active show" id="tab-example-161">
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  <div class="widget-content">
                    <div class="text-center">
                      <h5 class="widget-heading opacity-4">March Totals</h5>
                      <h5>
                        <span class="pr-2">
                          <b class="text-danger">12</b> new leads,
                        </span>
                        <span>
                          <b class="text-success">$56,24</b> in sales
                        </span>
                      </h5>
                    </div>
                  </div>
                </li>
                <li class="p-0 list-group-item">
                  <div class="grid-menu grid-menu-2col overflow-hidden">
                    <div class="no-gutters row">
                      <div class="col-sm-6">
                        <button class="btn-icon-vertical btn-square btn-transition btn btn-outline-link">
                          <i class="lnr-license btn-icon-wrapper btn-icon-lg mb-3"></i>View Profile
                        </button>
                      </div>
                      <div class="col-sm-6">
                        <button class="btn-icon-vertical btn-square btn-transition btn btn-outline-link">
                          <i class="lnr-music-note btn-icon-wrapper btn-icon-lg mb-3"></i>Leads Generated
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="tab-pane" id="tab-example-162">
              <div class="p-3">
                <p
                  class="mb-0"
                >With supporting text below as a natural lead-in to additional content.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-12 col-lg-12 col-xl-12">
        <b-card class="main-card mb-3">
            <FullCalendar class="demo-app-calendar" ref="fullCalendar" defaultView="dayGridMonth"
                :header="{
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
            }"
                :plugins="calendarPlugins" :weekends="calendarWeekends" :events="calendarEvents"
                @dateClick="handleDateClick" />
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import PageTitle from "../../Layout/Components/PageTitle.vue";
import FullCalendar from "@fullcalendar/vue";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faArrowRight,
  faArrowLeft,
  faAngleUp,
  faDotCircle,
  faAngleDown
} from "@fortawesome/free-solid-svg-icons";

library.add(faArrowRight, faAngleUp, faArrowLeft, faDotCircle, faAngleDown);

export default {
  components: {
    PageTitle,
    FullCalendar
  },
  data: () => ({
    heading: "Профиль Aliesha Hunter",
    subheading:
      "Текст описания для администратора",
    icon: "pe-7s-science icon-gradient bg-happy-itmeo",

    fill: { gradient: ["var(--primary)"] },
    fill1: { gradient: ["#2af598", "#009efd"] },
    fill2: { gradient: ["#fccb90", "#d57eeb"] },

    f1: { gradient: ["#3f6ad8"] },
    f2: { gradient: ["#3ac47d"] },
    f3: { gradient: ["#16aaff"] },
    f4: { gradient: ["#f7b924"] },
    f5: { gradient: ["#d92550"] },
    f6: { gradient: ["#444054"] },
    calendarPlugins: [
      // plugins must be defined in the JS
      dayGridPlugin,
      timeGridPlugin,
      interactionPlugin // needed for dateClick
    ],
    calendarWeekends: true,
    calendarEvents: [
      // initial event data
      { title: "Event Now", start: new Date() }
    ]
  }),

  methods: {
    handleDateClick(arg) {
      if (confirm("Would you like to add an event to " + arg.dateStr + " ?")) {
        this.calendarEvents.push({
          // add new event data
          title: "New Event",
          start: arg.date,
          allDay: arg.allDay
        });
      }
    }
  }
};
</script>
