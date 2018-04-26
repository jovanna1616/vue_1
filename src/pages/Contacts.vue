<template>
<div class="container">
    <div class="row">
        <div class="col">
            <ContactsList :contacts="contacts"/>
        </div>
        <div class="col">
            <ContactDetails/>
        </div>
    </div>
</div>
</template>

<script>
import ContactsList from '../components/ContactsList'
import ContactDetails from '../components/ContactDetails'

export default {
    components: {
        ContactsList,
        ContactDetails
    },
    data() {
        return {
            contacts: [
                { name: 'John Doe' },
                { name: 'Jane Doe' },
                { name: 'Mark Black' },
            ]
        }
    }
}
</script>

<style>

</style>

