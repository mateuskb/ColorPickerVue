<template>
  <div id="AppNavbar">
    <ul>
      <li><img src="../assets/logo.png"/></li>
      <li><p>Projeto em vueJs - Color picker</p></li>
      <div id="NavBarDivRight">
        <li><a href="./estilo1" >Estilo 1</a></li>
        <li><a href="./estilo2">Estilo 2</a></li>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'navbar',
};
</script>

<style>
  #AppNavbar {
    color:#fff
  }
  #AppNavbar img{
    margin: 10px;
    height: 40px;
    width: auto;
  }
  #AppNavbar ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: rgb(26, 153, 126);
  }
  #AppNavbar li {
    vertical-align: auto;
    margin: auto 5px;
    float: left;
  }
  #AppNavbar a {
    text-decoration: none;
    color: rgb(203, 248, 231);
    margin-top: 23px;
    margin-bottom: 23px;
    display: block;
  }
  #NavBarDivRight{
    float: right;
    margin-right: 20px;
  }
  #AppNavbar p {
    margin-top: 23px;
    margin-bottom: 23px;
  }
  #AppNavbar a:hover,
  #AppNavbar a:active {
    color: rgb(255, 255, 255)
  }
</style>
