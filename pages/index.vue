<template lang="pug">
  v-row(justify="center" align="center")
    v-col(cols="12" sm="8" md="6")
      v-row
        v-col(v-for="product in products" cols=6)
          v-card
            v-img(height=140 src="https://cdn.vuetifyjs.com/images/cards/cooking.png")
            v-card-title {{ product.title }}
            v-card-subtitle ￥{{ product.amount }}
            v-card-text
              v-rating(:value="product.rating" readonly half-increments dense size=13)
              .grey--text {{product.rating }}
            v-card-actions
              v-btn(@click="purchase(product)" primary) Purchase

            
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo
  },
  data(){
    return {
      page: 1,
      products: [
        {
          "title": "product a",
          "amount": 690,
          "rating": 3.56
        },
        {
          "title": "product b",
          "amount": 700,
          "rating": 4.56
        },
        {
          "title": "product c",
          "amount": 590,
          "rating": 4.0
        },
        {
          "title": "product d",
          "amount": 890,
          "rating": 4.9
        }
      ],
    }
  },
  methods:{
    getProductData(){
      
    },
    purchase(product){
      alert(product.title);
    }
  }
}
</script>
