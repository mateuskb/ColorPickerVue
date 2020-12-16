<template>
  <div id="start">
    <img src="../assets/logo.png">
    <h1>Bem-vindo ao projeto de escolha de cor em VueJs</h1>
    <router-view/>
    <links/>
  </div>
</template>

<script>
import Links from './Links';

export default {
  components: { Links },
  name: 'Start',
};
</script>

<style>
#start {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}
h1 {
  font-weight: normal;
}
</style>
