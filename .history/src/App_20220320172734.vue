<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
     <hello/> 
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <Agenda/> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
 import hello from "vue-simplecrm";

export default {
  name: 'App',
  components: {
 //   HelloWorld,
 hello,
   //  Agenda
  },
  mounted : function (){
    console.log(hello);
   // console.log(Agenda);
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
