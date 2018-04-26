<template>
  <div id="app">
    <button class="btn btn-primary">Hello bootstrap</button>
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

