<template>
  <div>
    <div class="h-100">
      <b-row class="h-100 no-gutters">
        <b-col lg="4" class="d-none d-lg-block">
            <div class="slider-light">
              <slick ref="slick" :options="slickOptions6">
                <div class="position-relative h-100 d-flex justify-content-center align-items-center bg-plum-plate" >
                  <div class="slide-img-bg" />
                  <div class="slider-content text-light">
                    <h3>Новые тарифы</h3>
                    <p>На нашем стайте будут установленны новые тарифы</p>
                  </div>
                </div>
                <div class="position-relative h-100 d-flex justify-content-center align-items-center bg-sunny-morning">
                  <div class="slide-img-bg opacity-6" />
                  <div class="slider-content text-light">
                    <h3>Тщательная проверка</h3>
                    <p>
                      Каждый психолог проходит тчательную проверку
                    </p>
                  </div>
                </div>
              </slick>
            </div>
        </b-col>
        <b-col lg="8" md="12" class="h-100 d-flex bg-white justify-content-center align-items-center">
          <b-col lg="6" md="8" sm="12" class="mx-auto app-login-box">
            <h4>
              <div>Востановить пароль?</div>
              <span>Заполните форму чтобы востановить его.</span>
            </h4>
            <div>
              <Form>
                <b-row form>
                  <b-col md="12">
                    <b-form-group>
                      <Label for="exampleEmail">Email</Label>
                      <b-form-input type="email" name="email"  id="exampleEmail"  placeholder="Введите Email..." />
                    </b-form-group>
                  </b-col>
                </b-row>
                <div class="mt-4 d-flex align-items-center">
                  <h6 class="mb-0">
                    <router-link to="/login" class="text-primary">Войти</router-link>
                  </h6>
                  <div class="ml-auto">
                    <b-button variant="primary" size="lg">Востановить пароль</b-button>
                  </div>
                </div>
              </Form>
            </div>
          </b-col>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import Slick from "vue-slick";

export default {
  components: {
    Slick
  },
  data: () => ({
    slickOptions6: {
      dots: true,
      infinite: true,
      speed: 500,
      arrows: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      initialSlide: 0,
      autoplay: true,
      adaptiveHeight: true
    },

    slide: 0,
    sliding: null
  }),

  methods: {
    handleClick(newTab) {
      this.currentTab = newTab;
    },
    next() {
      this.$refs.slick.next();
    },

    prev() {
      this.$refs.slick.prev();
    },

    reInit() {
      this.$nextTick(() => {
        this.$refs.slick.reSlick();
      });
    },

    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    }
  }
};
</script>

