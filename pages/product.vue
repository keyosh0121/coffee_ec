<template lang="pug">
    div
        v-row
            v-col(cols=6)
                v-img(src="https://picsum.photos/600/900")
            v-col(cols=6)
                v-container.pa-4
                    a back to index
                    h1.my-2 {{product.title}} {{product_id}}
                    .d-flex.pa-0.justify-start
                        v-rating(:value="product.rating" readonly half-increments dense size=18)
                        //- v-container(width=20)
                        span.grey--text.pa-1.caption {{product.rating}} (45)
                    h3.my-2 Country
                    .d-flex.mb-4
                        v-sheet.d-flex(elevation=1) 
                            v-img(src='https://picsum.photos/50/20')
                            .pa-3 Venezuela
                        
                    h3.my-2 Category
                    .d-flex.mb-4
                        v-sheet.pa-2.mr-2(elevation=1) Dark
                        v-sheet.pa-2.mr-2(elevation=1) Bitter Sweet
                        v-sheet.pa-2.mr-2(elevation=1) Espresso
                    h3.my-2 Taste
                    v-list(width="300")
                        v-list-item.pa-0
                            .caption.mr-4 bitterness
                            v-progress-linear(striped height=5 color="brown darken-3" value=25)
                    v-list(width="300")
                        v-list-item.pa-0
                            .caption.mr-4 frutiness
                            v-progress-linear(striped height=5 color="green darken-3" value=25)
                    h3.my-2 Description
                    span.font-weight-light Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
        v-footer(fixed color="transparent")
            v-card.ma-3.pa-2.white(elevation=4 width="100%")
                v-row
                    v-col
                        v-img(src='https://picsum.photos/100/60')
                    v-col   
                        v-container
                            h3 {{ product.title }}
                            .caption lorem ipsum sit dolor amet
                    v-col 
                        v-container(fill-height)
                            .font-weight-bold Count
                    v-col
                        v-container(fill-height) ¥{{product.amount}}
                    v-col 
                        v-container(fill-height)
                            v-btn add to cart
                
        
</template>
<script>
export default {
    data(){
        return {
            product_id: this.$route.params.id,
            product: {
                "title": "product a",
                "amount": 690,
                "rating": 3.56,
                "image": 'https://picsum.photos/200/300.png'
            }
        }
    }
}
</script>
<style lang="sass">
    .addtocart
        position: sticky
        bottom: 120px
</style>