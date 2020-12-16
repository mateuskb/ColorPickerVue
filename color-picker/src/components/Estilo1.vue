<template>
  <div :style="Estilo1" id="Estilo1">
    <div class="container">
      <h2>
        Color Picker - Ranger
      </h2>

      <p>{{color}}</p>
      <p id="small">({{value1}}, {{value2}}, {{value3}})</p>
      <div id="rangers">
        <input type="range" v-model="value1" orient="vertical" id="red" min="0" max="255" v-on:input="setValue" value=""/>
        <input type="range" v-model="value2" orient="vertical" id="green" min="0" max="255" v-on:input="setValue"/>
        <input type="range" v-model="value3" orient="vertical" id="blue" min="0" max="255" v-on:input="setValue"/>
      </div>
      <div id="Letters">
        <p class="small-letter">R</p>
        <p class="small-letter">G</p>
        <p class="small-letter">B</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Estilo1',
  data: function() {
       return {
          color: "#ffffff",
          value1: "255",
          value2: "255",
          value3: "255",
        }
  },
  methods: {
    valueToHex(integer) {
      let number = (+integer).toString(16).toUpperCase()
      if( (number.length % 2) > 0 ) { number= "0" + number }
      return number
    },
    setValue(){
      console.log(this.valueToHex(this.value1));
      let value1, value2, value3;
      value1 = this.valueToHex(this.value1);
      value2 = this.valueToHex(this.value2);
      value3 = this.valueToHex(this.value3);
      this.color = "#" + value1 + value2 + value3;
    }

  },
  computed: {
    Estilo1() {
      return {
        "background-color": this.color,
      };
    }
  }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#Estilo1 h1, h2, p {
  font-weight: normal;
  text-align: center;
  font-size: 300%;
  text-shadow: 1px 1px #fff;
  margin-top: 0;
  padding-top: 30px;
}

#small {
  font-size: 150%;
}

#Letters {
  text-align: center;
  width: 100%;
}

.small-letter {
  font-size: 130%;
  margin: 0 12px;
  display:inline;
  word-wrap: break-word;
  text-align: center;
  padding: 0;
}



#Estilo1 input[type=range][orient=vertical]
{
    writing-mode: bt-lr; /* IE */
    -webkit-appearance: slider-vertical; /* WebKit */
    width: 8px;
    height: 175px;
    padding: 0 5px;
}

#Estilo1 {
  width: 100%;
  position: absolute;
  top: 64px;
  bottom: 0;
}

#rangers {
  margin: 30px auto 10px 0;
  text-align: center;
}

#rangers input{
  margin: 0 10px;
  text-align: center;
}

</style>
