<template>
    <HeaderLayout/>
    <MainLayout/>
    <AboutMeLayout/>
    <ProjectsLayout/>
    <ContactLayout/>
    <FooterLayout/>
</template>

<script>
    import HeaderLayout from '../components/HeaderLayout.vue'
    import MainLayout from '../components/MainLayout.vue'
    import AboutMeLayout from '../components/AboutMeLayout.vue'
    import ProjectsLayout from '../components/ProjectsLayout.vue'
    import ContactLayout from '../components/ContactLayout.vue'
    import FooterLayout from '../components/FooterLayout.vue'



    export default {
        components: {
            HeaderLayout,
            MainLayout,
            AboutMeLayout,
            ProjectsLayout,
            ContactLayout,
            FooterLayout,
        }
    }
</script>

<style>

</style>
