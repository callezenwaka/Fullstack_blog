<template>
  <v-app>
    <v-container fluid>
      <v-layout row>
	      <v-flex xs12>
	        <h4>WELCOME HOME</h4>
	      </v-flex>
    </v-layout>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .title {
    position: absolute;
    bottom: 50px;
    background-color: rgba(0,0,0,0.5);
    color: white;
    font-size: 2em;
    padding: 20px;
  }
  .headline {

    text-align: center;
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