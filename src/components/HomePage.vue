<template>
  <div class="hello">
     <div class="start_content">
       <h1>Witaj na mojej stronie!</h1>
       <h3>Stworzona została ona w ramach pracy inżynierskiej o tytule ,,Zastosowanie frameworka Vue.js do realizacji aplikacji internetowych".
         W jej ramach wykonałem bibliotekę ćwiczeń zawierającą stale zwiększającą się bazę ćwiczeń fizycznych wraz z ich opisami oraz cechami charakterystycznymi.
         W celu przejścia do biblioteki należy skorzystać z paska nawigacji znajdującego się u góry lub dla urządzeń mobilnych - rozwijanego z lewej strony. 
       </h3>
     </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  margin:100px;
  border:1px solid black;
  min-height:800px;
  padding: 50px 20px 50px 20px;
  background-color:white;
  text-align:center;
}

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
@media only screen and (max-width: 1000px) {
.hello{
  margin:100px 20px 100px 20px;
}
}
</style>
