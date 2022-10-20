<template>
    <HeaderLayout/>
    <MainLayout/>
    <FooterLayout/>
</template>

<script>
    import HeaderLayout from '../components/HeaderLayout.vue'
    import MainLayout from '../components/MainLayout.vue'
    import FooterLayout from '../components/FooterLayout.vue'

    export default {
        components: {
            HeaderLayout,
            MainLayout,
            FooterLayout,
        }
    }
</script>

<style>

</style>
