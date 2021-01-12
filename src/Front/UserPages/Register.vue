<template>
  <div class="h-100">
    <b-row class="h-100 no-gutters">
      <b-col lg="7"  md="12" class="h-100 d-md-flex d-sm-block bg-white justify-content-center align-items-center">
        <b-col lg="9" md="10" sm="12" class="mx-auto app-login-box">
          <h4>
            <div>Здравствуйте,</div>
            <span>
              Создать аккаунт займет 
              <span class="text-success">несколько секунд</span>
            </span>
          </h4>
          <div>
            <Form>
              <b-row form>
                <b-col md="6">
                  <b-form-group>
                    <Label for="exampleEmail">
                      <span class="text-danger">*</span>
                      Email
                    </Label>
                    <b-form-input  type="email"  name="email" id="exampleEmail" placeholder="Введите Email..." />
                  </b-form-group>
                </b-col>
                <b-col md="6">
                  <b-form-group>
                    <Label for="exampleName">Имя</Label>
                    <b-form-input type="text"  name="text" id="exampleName"  placeholder="Введите имя..." />
                  </b-form-group>
                </b-col>
                <b-col md="6">
                  <b-form-group>
                    <Label for="exampleName">Номер</Label>
                    <b-form-input type="text"  name="text" id="exampleName"  placeholder="Введите телефонный номер..." />
                  </b-form-group>
                </b-col>
                <b-col md="12">
                  <b-form-group>
                    <Label for="exampleName">Описание</Label>
                    <b-form-textarea type="text"  name="textarea" id="exampleName"  placeholder="Введите описание профиля..." />
                  </b-form-group>
                </b-col>
                <b-col md="6">
                  <b-form-group>
                    <Label for="examplePassword">
                      <span class="text-danger">*</span>
                      Пароль
                    </Label>
                    <b-form-input type="password" name="password" id="examplePassword" placeholder="Введите пароль..." />
                  </b-form-group>
                </b-col>
                <b-col md="6">
                  <b-form-group>
                    <Label for="examplePasswordRep">
                      <span class="text-danger">*</span>
                      Повторите пароль
                    </Label>
                    <b-form-input type="password" name="passwordrep"  id="examplePasswordRep" placeholder="Повторите пароль..." />
                  </b-form-group>
                </b-col>
                <b-col md="6">
                  <b-form-group>
                    <b-form-checkbox name="check" id="exampleCheck">
                      Создать аккаунт психолога
                    </b-form-checkbox>
                  </b-form-group>
                </b-col>
                <b-col md="6">
                  <b-form-group>
                    <b-form-checkbox name="check" id="exampleCheck">
                      Вы соглашаетесь 
                      <a href="javascript:void(0);">с правилами сайта</a>.
                    </b-form-checkbox>
                  </b-form-group>
                </b-col>
              </b-row>
              
              <div class="mt-4 d-flex align-items-center">
                <h5 class="mb-0">
                  У вас уже есть аккаунт?
                  <router-link to="/login" class="text-primary">Войдите</router-link>
                </h5>
                <div class="ml-auto">
                  <b-button color="primary" class="btn-wide btn-pill btn-shadow btn-hover-shine" size="lg">Создать аккаунт</b-button>
                </div>
              </div>
            </Form>
          </div>
        </b-col>
      </b-col>
      <b-col lg="5" class="d-lg-flex d-xs-none">
        <div class="slider-light">
          <slick ref="slick" :options="slickOptions6">
            <div class="position-relative h-100 d-flex justify-content-center align-items-center bg-plum-plate">
              <div class="slider-content text-light">
                <h3>Присоединяйтесь!</h3>
                <p>Мы поможем решить ваши пробелмы</p>
              </div>
            </div>
          </slick>
        </div>
      </b-col>
    </b-row>
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
