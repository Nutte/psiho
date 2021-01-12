<template>
  <div>
    <page-title :heading="heading" :subheading="subheading" :icon="icon"></page-title>
  <div class="trainings layout-page">
    <div class="trainings-page-block">
  
        <div class="row ">   

        <div class="card-hover-shadow card-border mb-3 card">
          <div class="dropdown-menu-header">
            <div class="dropdown-menu-header-inner bg-warning">
              <div class="menu-header-content">
                <div>
                  <a href="javascript:void(0);"  class="avatar-icon-wrapper btn-hover-shine avatar-icon-xl">
                    <div class="avatar-icon rounded">
                      <img src="@/assets/images/avatars/3.jpg" alt="Avatar 5" />
                    </div>
                  </a>
                </div>
                <div>
                  <h5 class="menu-header-title">Ведущий: <b>ГАЛИНА ТИМОШЕНКО</b></h5>
                  <h6 class="menu-header-subtitle">2020-11-21 18:00 <b> 90 </b> минут</h6>
                </div>
              </div>
            </div>
          </div>
          <div class="card-body">
            <p>Ведущий: ГАЛИНА ТИМОШЕНКО2020-11-21 18:00 90 минутЗАПИСАТЬСЯ
            Почему, когда рядом нет того, кого мы любим, мы одиноки? Или мы одиноки тогда, когда нас никто не любит? И почему вообще человек оказывается в одиночестве? Потому ли, что он (или она) пропустил загадочный миг встречи с тем самым единственным? Или потому, что вообще лишен такой способности - любить? Да и вообще - всем ли дано любить? И можно ли эту способность приобрести или развить? И, наконец, можно ли по-настоящему полюбить кого-то, не любя себя самого?</p>
            <p class="mb-0">Если Вы хотите найти свои ответы на все эти вопросы, то на нашей группе Вам предстоит:</p>
              <div class="vertical-time-simple vertical-without-time vertical-timeline vertical-timeline--animate vertical-timeline--one-column">
                  <div class="dot-warning vertical-timeline-element">
                    <div>
                      <span class="vertical-timeline-element-icon bounce-in"></span>
                      <div class="vertical-timeline-element-content bounce-in">
                        <p>
                          <b>разобраться</b> с тем, что это вообще такое – <b>любовь</b>;
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="dot-warning vertical-timeline-element">
                    <div>
                      <span class="vertical-timeline-element-icon bounce-in"></span>
                      <div class="vertical-timeline-element-content bounce-in">
                        <p>
                          <b>выяснить</b>, откуда взялись Ваши нынешние любовные <b>страдания</b>;
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="dot-warning vertical-timeline-element">
                    <div>
                      <span class="vertical-timeline-element-icon bounce-in"></span>
                      <div class="vertical-timeline-element-content bounce-in">
                        <p>
                          <b>понять</b>, как избежать таких страданий в будущем;
                        </p>
                      </div>
                    </div>
                  </div><div class="dot-warning vertical-timeline-element">
                    <div>
                      <span class="vertical-timeline-element-icon bounce-in"></span>
                      <div class="vertical-timeline-element-content bounce-in">
                        <p>
                          <b>узнать</b>, как <b>полюбить</b> себя.
                        </p>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          <div class="d-block text-right card-footer">
            <router-link to="trainings" class="mr-2 btn btn-link btn-sm">Назад</router-link>
            <dialogs/>
          </div>
        </div>

        </div>
    </div>


</div>
 </div>
</template>

<script>
import PageTitle from "../../Layout/Components/PageTitle.vue";
import dialogs from "../Components/PayLand";

export default {
  components: {
    PageTitle,
    dialogs
  },
  data: () => ({
    heading: "ЧТО ТАКОЕ ЛЮБОВЬ И КАК ОТ НЕЕ НЕ МУЧИТЬСЯ",
    subheading:
      "2020-11-21 18:00",
    icon: "pe-7s-study icon-gradient bg-tempting-azure",
    show: false
    
  }),

  methods: {}
};
</script>
