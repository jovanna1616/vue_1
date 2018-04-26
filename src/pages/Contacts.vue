<template>
<div class="container">
    <div class="row">
        <div class="col">
            <ContactsList/>
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
    }
}
</script>

<style>

</style>

