<template>
  <div class="hello">
    <p>
<hello-crm msg="SIMPLE CRM COMPONENTS"/>
    </p>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import component from "simple-crm";
console.log(component)
export default {
  name: 'home-page',
  components : {
'hello-crm' : component.hello
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
