<template>
<div>
<div class="before-video row">
  <div class="video-section">
    <video autoplay loop muted class="wrapper__video">
      <source src="https://psychologists.fun/video/vid.mp4">
    </video>
  </div>

    <div class="col-sm-12 col-md-6 col-xl-6 text-block">
      <h6>
        У вас есть вопрос?
      </h6>
      <h4>
        Спросите у психолога!
      </h4>
      <h5>
        ЧТО ДЕЛАТЬ, ЕСЛИ ВСЕ НЕ ТАК?
        СПРОСИТЕ У ПСИХОЛОГА
      </h5>
    </div>
    <div class="col-sm-12 col-md-6 col-xl-6 btn-block">
      <a class="btn-lin" href="https://psychologists.fun/video/vid.mp4">
        <i class="pe-7s-play btn-icon-wrapper"></i>
      </a>
    </div>

</div>

<div class="homepage layout-page">
    

    <div class="consultation-block">
        <div class="head-text">
                <h4>
                    ВЫБЕРИТЕ ТЕМУ КОНСУЛЬТАЦИИ
                </h4>
                <h5>
                    Что вас беспокоит?
                </h5>
            </div>
        <div class="row ">

            <div class="col-sm-12 col-md-6 col-xl-3 card-block">
              <div class="body-cons">
                <div class="text">
                  <h5 class="menu-header-title">Я САМ</h5>
                </div>
                <div class="btn-cons">
                  <button class="btn-shadow-dark btn-wider btn btn-dark">ВЫБРАТЬ</button>
                </div>
              </div>
            </div>
            
            <div class="col-sm-12 col-md-6 col-xl-3 card-block">
              <div class="body-cons">
                <div class="text">
                  <h5 class="menu-header-title">СЕМЬЯ</h5>
                </div>
                <div class="btn-cons">
                  <button class="btn-shadow-dark btn-wider btn btn-dark">ВЫБРАТЬ</button>
                </div>
              </div>
            </div>

            <div class="col-sm-12 col-md-6 col-xl-3 card-block">
              <div class="body-cons">
                <div class="text">
                  <h5 class="menu-header-title">РАБОТА</h5>
                </div>
                <div class="btn-cons">
                  <button class="btn-shadow-dark btn-wider btn btn-dark">ВЫБРАТЬ</button>
                </div>
              </div>
            </div>

            <div class="col-sm-12 col-md-6 col-xl-3 card-block">
              <div class="body-cons">
                <div class="text">
                  <h5 class="menu-header-title">ОТНОШЕНИЯ</h5>
                </div>
                <div class="btn-cons">
                  <button class="btn-shadow-dark btn-wider btn btn-dark">ВЫБРАТЬ</button>
                </div>
              </div>
            </div>

        </div>
    </div>

    <div class="header-lay-img">
      <img src="@/assets/images/header/psyho-header.png" alt="Психологи" />
    </div>

    <div class="teacher-block">
        <teacher/>
    </div>

    <div class="header-lay-img">
      <img src="@/assets/images/header/help-header.png" alt="Поддержка" />
    </div>

    <div class="help-block">
        <div class="head-text">
                <h5>
                    У Нас вы найдете поддержку
                </h5>
            </div>
        <div class="row ">

            <div class="col-sm-12 col-md-12 col-xl-4 card-block">
              <div class="body-cons">
                <div class="text help-i">
                  <h5 class="menu-header-title">САМООЦЕНКА</h5>
                </div>
                <div class="smal-txt">
                  Научиться принимать и любить себя таким, как есть
                </div>
              </div>
            </div>
            
            <div class="col-sm-12 col-md-12 col-xl-4 card-block">
              <div class="body-cons">
                <div class="text help-garmony">
                  <h5 class="menu-header-title">ГАРМОНИЯ</h5>
                </div>
                <div class="smal-txt">
                  Снизить стресс и тревогу. Успокоиться в критической ситуации
                </div>
              </div>
            </div>

            <div class="col-sm-12 col-md-12 col-xl-4 card-block">
              <div class="body-cons">
                <div class="text help-love">
                  <h5 class="menu-header-title">ОТНОШЕНИЯ</h5>
                </div>
                <div class="smal-txt">
                  Улучшить отношения - личные, семейные и деловые
                </div>
              </div>
            </div>

        </div>
    </div>

    <div class="header-lay-img">
      <img src="@/assets/images/header/blog-header.png" alt="Блог" />
    </div>

    <div class="row news-block">
      <div class="col-sm-12 col-md-6 col-xl-4">
        <div class="card-shadow-primary card-border text-white mb-3 card ">
          <div class="dropdown-menu-header">
            <div class="dropdown-menu-header-inner">
              <div class="menu-header-content">
                <span style="background-image: url(https://psychologists.fun/storage/articles/7m4H95YewiQp8RbSLtcv1faMyBdGCXkveyD2Dmua.jpeg);"></span>
                
              </div>
            </div>
          </div>
          <div class="text-center d-block card-footer">
            <div class="info-blog">
                  <hr>
                  <h6 class="menu-header-subtitle">12.12.20</h6>
                  <h5 class="menu-header-title">Vinnie Wagstaff</h5>
                </div>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-6 col-xl-4">
        <div class="card-shadow-primary card-border text-white mb-3 card ">
          <div class="dropdown-menu-header">
            <div class="dropdown-menu-header-inner ">
              <div class="menu-header-content">
                <span style="background-image: url(https://psychologists.fun/storage/articles/7m4H95YewiQp8RbSLtcv1faMyBdGCXkveyD2Dmua.jpeg);"></span>
               
              </div>
            </div>
          </div>
          <div class="text-center d-block card-footer">
             <div class="info-blog">
                  <hr>
                  <h6 class="menu-header-subtitle">12.12.20</h6>
                  <h5 class="menu-header-title">Vinnie Wagstaff</h5>
                </div>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-12 col-xl-4">
        <div class="card-shadow-primary card-border text-white mb-3 card ">
          <div class="dropdown-menu-header">
            <div class="dropdown-menu-header-inner ">
              <div class="menu-header-content">
                <span style="background-image: url(https://psychologists.fun/storage/articles/7m4H95YewiQp8RbSLtcv1faMyBdGCXkveyD2Dmua.jpeg);"></span>
                
              </div>
            </div>
          </div>
          <div class="text-center d-block card-footer">
            <div class="info-blog">
                  <hr>
                  <h6 class="menu-header-subtitle">12.12.20</h6>
                  <h5 class="menu-header-title">Vinnie Wagstaff</h5>
                </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</div>
</template>

<script>
//import PageTitle from "../../Layout/Components/PageTitle.vue";
import teacher from "../Components/Teacher"


export default {
  components: {
    //PageTitle,
    teacher
  },
  data: () => ({
    heading: "Analytics Dashboard",
    subheading:
      "This is an example dashboard created using build-in elements and components.",
    icon: "pe-7s-plane icon-gradient bg-tempting-azure",

    
  }),

  methods: {}
};
</script>
