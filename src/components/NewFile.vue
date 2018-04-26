<template>
  <div>
    <p>{{ message }}</p>
    <p>{{ reversedMessage }}</p>
      <input type="text" v-model="searchTerm">
      <button @click="notifyParent()">
        Notify parent
      </button>
  </div>
</template>

<script>
export default {
    props: ['message'],
    data() {
        return {
            searchTerm: ''
        }
    },
    methods: {
        notifyParent() {
            this.$emit('notify-parent', 'Hello from child component')
        }
    },
    computed: {
        reversedMessage() {
            return this.message.split('').reverse().join('')
        }
    },
    watch: {
        searchTerm(newValue, oldValue) {
            console.log('New value: ', newValue);
            console.log('Old value: ', oldValue);
        }
    }
}
</script>
