<template>
  <div :style="Estilo1" id="Estilo1">
    <div class="container">
      <h2>
        Color Picker - Conversor
      </h2>

      <input type="text" v-model="colorText" maxlength="6" v-on:input="setValue" value="ffffff" id="ColorInput" size="20"/>
      <p>{{color}}</p>
      <p id="small">RGB ({{value1}}, {{value2}}, {{value3}})</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Estilo2',
  data: function() {
       return {
          colorText: "ffffff",
          color: "#ffffff",
          value1: "255",
          value2: "255",
          value3: "255",
        }
  },
  methods: {
    setValue(){
      let backupcolor = this.color;
      this.color = "#" + this.colorText;
      this.hexToRgb(this.color, backupcolor);
    },
    hexToRgb(hex, backupcolor) {
      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      console.log(result);
      if(result){
        this.value1 = parseInt(result[1], 16)
        this.value2 = parseInt(result[2], 16)
        this.value3 = parseInt(result[3], 16)
      } else {
        this.color = backupcolor;
      }
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


#ColorInput {
  padding: 10px;
  border:1px solid #ccc;
  border-radius: 20px;
  margin: 8px 0;
  width: 100%;
  text-align: center;
  box-sizing: border-box;
  font-size: 130%;
}

#ColorInput:focus{
    outline: none;
}
#Estilo1 {
  width: 100%;
  position: absolute;
  top: 64px;
  bottom: 0;
}


</style>
