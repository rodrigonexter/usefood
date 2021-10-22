<template>
  <v-app>
    <v-main>
      <CategoryOptions/>
      <CategorySearch/>
      <Empty/>
      <RegisterNewProductButton/>
    </v-main>
  </v-app>
</template>

<script>
  import CategoryOptions from '../../components/home/CategoryOptions.vue'
  import CategorySearch from '../../components/home/CategorySearch.vue'
  import Empty from '../../components/shared/Empty.vue'
  import RegisterNewProductButton from '../../components/shared/RegisterNewProductButton.vue'



export default {
  name: 'home',

  components: {
    CategoryOptions,
    Empty,
    CategorySearch,
    RegisterNewProductButton
  },

  data: () => ({
    //
  }),
};
</script>