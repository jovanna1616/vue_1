<template>
  <div id="app">
    <ContactsList/>
  </div>
</template>

<script>
import ContactsList from './components/ContactsList.vue'

export default {
  name: 'app',
  // navodimo koje komponente moze da koristi u svom template
  components: {
    // ContactsList: ContactsList
    // ako je key name = value name moze shortcut:
    ContactsList
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
