<template>
    <header>
      <NavigationLayout/>
    </header>
  </template>
  
  <script>
    import NavigationLayout from '../components/NavigationLayout.vue';

  export default {
    name: 'HeaderLayout',
    data: ()=> {
      return {
        showMobileMenu: true,
        showNav: false
      }
    },
    methods: {
    showMenu() {
    this.showMobileMenu = window.innerWidht <= 990;
    },
    },
    components : {
      NavigationLayout,
    },
    created() {
      this.showMenu();
    }

  }
  </script>
  
  <style>
    
  </style>
  