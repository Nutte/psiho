<template>
    <div class="row ">
      <div class="filter-teah col-md-12 row">
        <div class="col-md-12 col-lg-3 col-xl-3">
          <span>
            Направление доктора
          </span>
          <v-select :items="items1" label="Выбрать" solo></v-select>
        </div>
        <div class="col-md-12 col-lg-3 col-xl-3">
          <span>
            Статус доктора
          </span>
          <v-select :items="items2" label="Выбрать" solo></v-select>
        </div>
        <div class="col-md-12 col-lg-6">
          <span>
            Оценка доктора
          </span>
          <v-rating v-model="rating"></v-rating>
        </div>
      </div>

      <div class="col-md-12 col-lg-6 col-xl-6 doc-cart">
        <div class="doc-body">
          <div class="img-doc">
            <span class="img" style="background-image: url(https://psychologists.fun//storage/users/bZfBdismknqtg2dJYvuMA5gAMJzUzCWIJ4SNocuj.png);"></span>
            <div class="name-doc">Foster the People</div>
          </div>

          <div class="text-doc">
                <div class="position">Проверен</div>
                <div class="headline">БОЧКОВСКАЯ ИРИНА АЛЕКСАНДРОВНА</div>
                <div class="rate">
                  <v-card-actions class="pa-3 star">
                    <v-icon>star_border</v-icon>
                      <span>0</span>
                      <v-spacer></v-spacer>
                    </v-card-actions>
                </div>
                <div class="info">
                  Психолог, сертифицированный НЛП-консультант, использует в работе техники когнитивно- поведенческой модели. Обладает опытом работы в сфере консультирования клиентов составляет 13 лет.
                </div>
                <div class="phone">
                  +380979390016
                </div>
                <div class="price">
                  <span>90 руб мин</span>
                </div>
                <div class="call">
                  
                      <v-bottom-sheet inset>
                        <template v-slot:activator>
                          <v-btn class="btn-shadow-dark btn-wider btn btn-dark">Записаться</v-btn>
                        </template>
                        <v-card tile>
                          <v-progress-linear :value="100" class="my-0" height="3"></v-progress-linear>
                          <v-list>
                            <v-list-tile>
                              <v-list-tile-content>
                                <v-list-tile-title>Записаться на сеанс</v-list-tile-title>
                                <v-list-tile-sub-title>БОЧКОВСКАЯ ИРИНА АЛЕКСАНДРОВНА</v-list-tile-sub-title>
                              </v-list-tile-content>
                              <v-spacer></v-spacer>
                              <v-list-tile-action class="list-modal">
                                <v-select :items="items3" label="Выбрать время" solo></v-select>
                              </v-list-tile-action>
                              <v-list-tile-action :class="{ 'mr-3': $vuetify.breakpoint.mdAndUp }">
                                <button type="button" class="btn-shadow d-inline-flex align-items-center btn btn-success">
                                  Записаться
                                </button>
                              </v-list-tile-action>
                            </v-list-tile>
                          </v-list>
                        </v-card>
                      </v-bottom-sheet>
                </div>
                <div class="price">
                  <span>90 руб мин</span>
                </div>
          </div>
        </div>
      </div>

            <div class="col-md-12 col-lg-6 col-xl-6 doc-cart">
        <div class="doc-body">
          <div class="img-doc">
            <span class="img" style="background-image: url(https://psychologists.fun//storage/users/bZfBdismknqtg2dJYvuMA5gAMJzUzCWIJ4SNocuj.png);"></span>
            <div class="name-doc">Foster the People</div>
          </div>

          <div class="text-doc">
                <div class="position">Проверен</div>
                <div class="headline">БОЧКОВСКАЯ ИРИНА АЛЕКСАНДРОВНА</div>
                <div class="rate">
                  <v-card-actions class="pa-3 star">
                    <v-icon>star_border</v-icon>
                      <span>0</span>
                      <v-spacer></v-spacer>
                    </v-card-actions>
                </div>
                <div class="info">
                  Психолог, сертифицированный НЛП-консультант, использует в работе техники когнитивно- поведенческой модели. Обладает опытом работы в сфере консультирования клиентов составляет 13 лет.
                </div>
                <div class="phone">
                  +380979390016
                </div>
                <div class="price">
                  <span>90 руб мин</span>
                </div>
                <div class="call">
                  
                      <v-bottom-sheet inset>
                        <template v-slot:activator>
                          <v-btn class="btn-shadow-dark btn-wider btn btn-dark">Записаться</v-btn>
                        </template>
                        <v-card tile>
                          <v-progress-linear :value="100" class="my-0" height="3"></v-progress-linear>
                          <v-list>
                            <v-list-tile>
                              <v-list-tile-content>
                                <v-list-tile-title>Записаться на сеанс</v-list-tile-title>
                                <v-list-tile-sub-title>БОЧКОВСКАЯ ИРИНА АЛЕКСАНДРОВНА</v-list-tile-sub-title>
                              </v-list-tile-content>
                              <v-spacer></v-spacer>
                              <v-list-tile-action class="list-modal">
                                <v-select :items="items3" label="Выбрать время" solo></v-select>
                              </v-list-tile-action>
                              <v-list-tile-action :class="{ 'mr-3': $vuetify.breakpoint.mdAndUp }">
                                <button type="button" class="btn-shadow d-inline-flex align-items-center btn btn-success">
                                  Записаться
                                </button>
                              </v-list-tile-action>
                            </v-list-tile>
                          </v-list>
                        </v-card>
                      </v-bottom-sheet>
                </div>
                <div class="price">
                  <span>90 руб мин</span>
                </div>
          </div>
        </div>
      </div>

      <div class="col-md-12 col-lg-6 col-xl-6 doc-cart">
        <div class="doc-body">
          <div class="img-doc">
            <span class="img" style="background-image: url(https://psychologists.fun//storage/users/bZfBdismknqtg2dJYvuMA5gAMJzUzCWIJ4SNocuj.png);"></span>
            <div class="name-doc">Foster the People</div>
          </div>

          <div class="text-doc">
                <div class="position">Проверен</div>
                <div class="headline">БОЧКОВСКАЯ ИРИНА АЛЕКСАНДРОВНА</div>
                <div class="rate">
                  <v-card-actions class="pa-3 star">
                    <v-icon>star_border</v-icon>
                      <span>0</span>
                      <v-spacer></v-spacer>
                    </v-card-actions>
                </div>
                <div class="info">
                  Психолог, сертифицированный НЛП-консультант, использует в работе техники когнитивно- поведенческой модели. Обладает опытом работы в сфере консультирования клиентов составляет 13 лет.
                </div>
                <div class="phone">
                  +380979390016
                </div>
                <div class="price">
                  <span>90 руб мин</span>
                </div>
                <div class="call">
                  
                      <v-bottom-sheet inset>
                        <template v-slot:activator>
                          <v-btn class="btn-shadow-dark btn-wider btn btn-dark">Записаться</v-btn>
                        </template>
                        <v-card tile>
                          <v-progress-linear :value="100" class="my-0" height="3"></v-progress-linear>
                          <v-list>
                            <v-list-tile>
                              <v-list-tile-content>
                                <v-list-tile-title>Записаться на сеанс</v-list-tile-title>
                                <v-list-tile-sub-title>БОЧКОВСКАЯ ИРИНА АЛЕКСАНДРОВНА</v-list-tile-sub-title>
                              </v-list-tile-content>
                              <v-spacer></v-spacer>
                              <v-list-tile-action class="list-modal">
                                <v-select :items="items3" label="Выбрать время" solo></v-select>
                              </v-list-tile-action>
                              <v-list-tile-action :class="{ 'mr-3': $vuetify.breakpoint.mdAndUp }">
                                <button type="button" class="btn-shadow d-inline-flex align-items-center btn btn-success">
                                  Записаться
                                </button>
                              </v-list-tile-action>
                            </v-list-tile>
                          </v-list>
                        </v-card>
                      </v-bottom-sheet>
                </div>
                <div class="price">
                  <span>90 руб мин</span>
                </div>
          </div>
        </div>
      </div>

      <div class="col-md-12 col-lg-6 col-xl-6 doc-cart">
        <div class="doc-body">
          <div class="img-doc">
            <span class="img" style="background-image: url(https://psychologists.fun//storage/users/bZfBdismknqtg2dJYvuMA5gAMJzUzCWIJ4SNocuj.png);"></span>
            <div class="name-doc">Foster the People</div>
          </div>

          <div class="text-doc">
                <div class="position">Проверен</div>
                <div class="headline">БОЧКОВСКАЯ ИРИНА АЛЕКСАНДРОВНА</div>
                <div class="rate">
                  <v-card-actions class="pa-3 star">
                    <v-icon>star_border</v-icon>
                      <span>0</span>
                      <v-spacer></v-spacer>
                    </v-card-actions>
                </div>
                <div class="info">
                  Психолог, сертифицированный НЛП-консультант, использует в работе техники когнитивно- поведенческой модели. Обладает опытом работы в сфере консультирования клиентов составляет 13 лет.
                </div>
                <div class="phone">
                  +380979390016
                </div>
                <div class="price">
                  <span>90 руб мин</span>
                </div>
                <div class="call">
                  
                      <v-bottom-sheet inset>
                        <template v-slot:activator>
                          <v-btn class="btn-shadow-dark btn-wider btn btn-dark">Записаться</v-btn>
                        </template>
                        <v-card tile>
                          <v-progress-linear :value="100" class="my-0" height="3"></v-progress-linear>
                          <v-list>
                            <v-list-tile>
                              <v-list-tile-content>
                                <v-list-tile-title>Записаться на сеанс</v-list-tile-title>
                                <v-list-tile-sub-title>БОЧКОВСКАЯ ИРИНА АЛЕКСАНДРОВНА</v-list-tile-sub-title>
                              </v-list-tile-content>
                              <v-spacer></v-spacer>
                              <v-list-tile-action class="list-modal">
                                <v-select :items="items3" label="Выбрать время" solo></v-select>
                              </v-list-tile-action>
                              <v-list-tile-action :class="{ 'mr-3': $vuetify.breakpoint.mdAndUp }">
                                <button type="button" class="btn-shadow d-inline-flex align-items-center btn btn-success">
                                  Записаться
                                </button>
                              </v-list-tile-action>
                            </v-list-tile>
                          </v-list>
                        </v-card>
                      </v-bottom-sheet>
                </div>
                <div class="price">
                  <span>90 руб мин</span>
                </div>
          </div>
        </div>
      </div>


      <div class="col-md-12 col-lg-12 col-xl-12 more-teacher">
        <button class="btn btn-success">Смотреть всех</button>
      </div>
    </div>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar, faPlus } from "@fortawesome/free-solid-svg-icons";

library.add(faStar, faPlus);

export default {
  props: {
    icon: String,
    heading: String,
    subheading: String
  },
  data: () => ({
    rating: 3,
    items1: ["Семейный психолог", "Невролог", "Психоаналитик"],
    items2: ["Провереный", "На проверке"],
    items3: ["15 мин ( 40 рублей )", "30 мин ( 70 рублей )", "60 мин ( 120 рублей )"],
  })
  
};
</script>
