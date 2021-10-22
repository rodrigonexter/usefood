<template>
  <v-app>
    <v-main>
      <CategoryOptions/>
      <CategorySearch/>
      <CardProduct/>
      <RegisterNewProductButton/>
    </v-main>
  </v-app>
</template>

<script>
  import CategoryOptions from '../../components/home/CategoryOptions.vue'
  import CategorySearch from '../../components/home/CategorySearch.vue'
  /* import Empty from '../../components/shared/Empty.vue' */
  import RegisterNewProductButton from '../../components/shared/RegisterNewProductButton.vue'
  import CardProduct from '../../components/home/CardProduct.vue'



export default {
  name: 'home',

  components: {
    CategoryOptions,
  /*   Empty, */
    CardProduct,
    CategorySearch,
    RegisterNewProductButton
  },

  data: () => ({
    //
  }),
};
</script>