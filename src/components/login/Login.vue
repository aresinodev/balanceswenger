<template lang="html">
  <div class="components-login-container">
    <div class="main">
      <h1 class="main-title">
        {{ $t('login.title') }}
      </h1>

      <form class="main-form-login"
            @submit.prevent="login">
        <div class="form-group col-sm-6
              col-xl-8 col-md-8">
          <label for="username">
            {{ $t('login.email') }}:
          </label>
          <input type="email"
                  class="form-control"
                  placeholder="Nombre de usuario"
                  :model="email">
        </div>
        <div class="form-group col-sm-6
              col-xl-8 col-md-8">
          <label for="password">
            {{ $t('login.password') }}:
          </label>
          <input type="password"
                  class="form-control"
                  placeholder="Contraseña"
                  :model="password">
        </div>
        <div class="col-xl-8
              col-sm-6 col-md-8 mt-5">
          <button type="submit"
                  class="btn btn-block btn-login">
            {{ $t('login.enter') }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="js">
  import axios from 'axios';

  export default  {
    name: 'src-components-login',
    props: [],
    mounted() {

    },
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      login() {
        const config = {
          headers: {
              'Content-Type': 'application/json'
          }
        };

        const data = {
          email: this.email,
          password: this.password
        };

        axios.post('https://biwenger.as.com/api/v2/auth/login',
        data, config)
        .then((response) => {
            console.log('Login response', response);
        })
        .catch((error) => {
            console.log('Login error', error);
        });
      }
    },
    computed: {

    }
}
</script>

<style scoped lang="scss">
@import "login.scss";
</style>
