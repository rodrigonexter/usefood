<template>
  <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Usefood Logo"
          class="shrink mr-2"
          contain
          src="../assets/img/logo-usefood.png"
          transition="scale-transition"
          width="40"
        />

        <h1>
          Usefood
        </h1>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="./assets/logo-usefood.png"
        target="_blank"
        text
      >
        <span class="mr-2">Sair</span>
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>
</template>

<script>
export default {

}
</script>

<style>

</style>