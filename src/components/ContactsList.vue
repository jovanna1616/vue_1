<template>
  <div>
    <table>
      <thead>
        <th>First name</th>
        <th>Last name</th>
        <th>Email</th>
      </thead>
      <tbody>
        <tr v-for="(contact, key) in contacts" :key="key">
          <td>{{ contact.firstName }}</td>
          <td>{{ contact.lastName }}</td>
          <td>{{ contact.email }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// pros dolaze spolja
// data mi definisemo
export default {
  name: 'ContactsList',
  // data() vraca nov objekat
  data() {
    return {
      contacts: [
        {firstName: 'Jovana', lastName: 'Radakovic', email: 'jovanaradakovic83@gmail.com'},
        {firstName: 'Vladimir', lastName: 'Radakovic', email: 'radakovic@gmail.com'},
        {firstName: 'Mane', lastName: 'Radakovic', email: 'mane@radakovic.com'},
        {firstName: 'Luka', lastName: 'Radakovic', email: 'luka@radakovic.com'},
      ]
    }
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
table {margin: 0 auto;}
th, td {border: 1px solid #00ff00}
</style>
