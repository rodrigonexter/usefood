<template>
  <v-container>
    <v-row>
      <v-col>
        <form ref="form">
          <v-text-field
            v-model="product.name"
            label="Nome do produto"
          ></v-text-field>
          <v-text-field
            v-model="product.description"
            label="Descrição"
          ></v-text-field>
          <v-text-field
            v-model="product.price"
            label="Valor (R$)"
          ></v-text-field>
          <v-text-field
            v-model="product.image"
            label="URL da imagem"
          ></v-text-field>
          <v-select
            v-model="product.category"
            :items="product.items"
            label="Categoria"
          ></v-select>

          <h3>Para quantas pessoas?</h3>
          <v-radio-group v-model="product.count_serves" column>
            <v-radio label="Serve 1 pessoa" value="Serve 1 pessoa"></v-radio>
            <v-radio label="Serve 2 pessoas" value="Serve 2 pessoas"></v-radio>
          </v-radio-group>

          <h3>Disponibilidade do produto para o público</h3>
          <v-radio-group v-model="product.is_available" column>
            <v-radio label="Disponível" value="true"></v-radio>
            <v-radio label="Indisponível" value="false"></v-radio>
          </v-radio-group>

          <v-btn color="primary" @click="registerProduct()"> Cadastrar </v-btn>
        </form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { routes } from "../../routes.js";
import axios from "axios";



export default {
  data() {
    return {
      routes,
      product: {
        name: "",
        count_serves: "",
        category: {
          _id: "",
          name: "",
          label: "",
        },
        image:"",
        is_available: true,
        is_on_sale: false,
        price: "",
        description: "",
        items: [
          {
            text: "Bebida",
            value: {
              _id: "614ab043e5eee5507715aadb",
              name: "Bebida",
              label: "bebida",
            },
          },
          {
            text: "Sobremesa",
            value: {
              _id: "614ab051e5eee5507715aadd",
              name: "Sobremesa",
              label: "sobremesa",
            },
          },
          {
            text: "Prato principal",
            value: {
              _id: "614ab0cbe5eee5507715aae1",
              name: "Prato principal",
              label: "prato principal",
            },
          },
          {
            text: "Massas",
            value: {
              _id: "614dd97d0e40fbdf82ee3075",
              name: "Massas",
              label: "massas",
            },
          },
        ],
      },
    };
  },
  methods: {
    reset () {
        this.$refs.form.reset()
      },

    registerProduct() {
      axios.post("http://localhost:3000/products", this.product);
      alert('Produto dacastrado com sucesso');
      this.reset();
    },
  },
};
</script>

<style>
</style>