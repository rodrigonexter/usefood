<template>
  <v-container>
    <v-row>
      <v-col cols="3" >
        <div class="usefood-flex-container usefood-flex-align-end">
          <v-icon x-large>mdi-shopping</v-icon>
          <span class="subtitle">Produtos cadastrados</span>
        </div>
      </v-col>
      <v-col cols="6">
        <v-text-field
          outlined
          label="Buscar na categoria"
          prepend-inner-icon="mdi-magnify"
        ></v-text-field>
      </v-col>
      <v-col cols="3">
        <v-combobox 
        outlined
        :items="items"
        label="Ordenar por"
        >

        </v-combobox>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      items: ['Maior preço', 'Menor preço']
    }
  }
};
</script>

<style>
.subtitle {
  color: #777;
  font-weight: 500;
}
</style>