<template lang="pug">
    v-row
        v-col(cols=6)
            v-img(src="https://picsum.photos/600/900")
        v-col(cols=6)
            v-container.pa-4
                a back to index
                h1.my-2 {{product.title}}
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
        //- TODO
        //- v-bottom-navigation.ma-2.fixed
        //-     | aaa 
</template>
<script>
export default {
    data(){
        return {
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