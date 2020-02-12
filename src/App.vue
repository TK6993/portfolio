<template>
  <div id="app">
    <!-- Navigation -->
    <Navigation />
    <router-view />

      <!-- Bootstrap core JavaScript
      <script src="vendor/jquery/jquery.min.js"></script>
      <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

      <script src="vendor/jquery-easing/jquery.easing.min.js"></script>

      <script src="js/jqBootstrapValidation.js"></script>
      <script src="js/contact_me.js"></script>

      <script src="js/agency.min.js"></script>-->
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'

export default {
  components: {
    Navigation

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #1e1e1e;
}
</style>
