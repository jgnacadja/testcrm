<template>
  <div class="hello">
    <p>
<hello-crm/>
    </p>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import hello from "simple-crm";
console.log(hello)
export default {
  name: 'home-page',
  components : {
'hello-crm' : hello.hello
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
