<template>
    <HeaderLayout/>
    <ProjectsLayout/>
    <FooterLayout/>
</template>

<script>
    import HeaderLayout from '../components/HeaderLayout.vue'
    import ProjectsLayout from '../components/ProjectsLayout.vue'
    import FooterLayout from '../components/FooterLayout.vue'

    export default {
        components: {
            HeaderLayout,
            ProjectsLayout,
            FooterLayout,
        }
    }
</script>

<style>

</style>
