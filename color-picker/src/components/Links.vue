<template>
  <div class="links">
    <h2>Escolha um estilo</h2>
    <ul>
      <li>
        <a
          href="estilo1"
        >
          Estilo 1
        </a>
      </li>
      <li>
        <a
          href="estilo2"
        >
          Estilo 2
        </a>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'Links'
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.links{
  margin-top: 30px;
  font-size: 120%;
}

h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
