<template>
<div>
    <page-title :heading="heading" :subheading="subheading" :icon="icon"></page-title>
    <div class="problems  layout-page">
    <div class="problems-page-block">
  
        <div class="row ">

            <div class="col-sm-12 col-md-12 col-xl-12 card-block">
                <div class="card-shadow-primary  text-white mb-3 card ">
                <div class="dropdown-menu-header">
                    <div class="dropdown-menu-header-inner">
                    <div class="menu-header-content">
                        <div>
                        <h5 class="menu-header-title">Я сам</h5>
                        <p>

                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore voluptate architecto animi fugit exercitationem temporibus nostrum rerum, amet perspiciatis consequuntur ad quo, nobis culpa magni voluptatum illum quas unde nisi?

                        </p>

                        <p>

                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore voluptate architecto animi fugit exercitationem temporibus nostrum rerum, amet perspiciatis consequuntur ad quo, nobis culpa magni voluptatum illum quas unde nisi?

                        </p>

                        <p>

                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore voluptate architecto animi fugit exercitationem temporibus nostrum rerum, amet perspiciatis consequuntur ad quo, nobis culpa magni voluptatum illum quas unde nisi?

                        </p>
                        </div>
                    </div>
                    </div>
                </div>
                  
                </div>
            </div>

        </div>
    </div>


  </div>
 </div>
</template>

<script>
import PageTitle from "../../Layout/Components/PageTitle.vue";


export default {
  components: {
    PageTitle
  },
  data: () => ({
    heading: "Проблемы",
    subheading:
      "Пример текста проблемы",
    icon: "pe-7s-comment icon-gradient bg-tempting-azure",

    
  }),

  methods: {}
};
</script>
