<template>
  <v-app>
      <v-main>
          <RegisterFormHeader/>
          <RegisterForm/>
      </v-main>
  </v-app>
</template>

<script>
import RegisterForm from '../../components/register/RegisterForm.vue';
import RegisterFormHeader from '../../components/register/RigisterFormHeader.vue';

export default {
    components: {
        RegisterForm,
        RegisterFormHeader
    }
}
</script>

<style>

</style>