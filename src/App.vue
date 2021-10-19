<template>
  <v-app>
    <v-main>
      <Header/>
      <CategoryOptions/>
      <CategorySearch/>
      <Empty/>
      <Footer/>
    </v-main>
  </v-app>
</template>

<script>
import Header from './components/Header.vue'
import CategoryOptions from './components/CategoryOptions.vue'
import CategorySearch from './components/CategorySearch.vue'
import Empty from './components/Empty.vue'
import Footer from './components/Footer.vue'


export default {
  name: 'App',

  components: {
    Header,
    Footer,
    CategoryOptions,
    Empty,
    CategorySearch
  },

  data: () => ({
    //
  }),
};
</script>
